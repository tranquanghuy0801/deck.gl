"""
CartoLayer
==========

Render cloud data with query parameters.
"""
import pydeck as pdk
from carto_auth import CartoAuth
from pydeck_carto import register_carto_layer, get_layer_credentials, get_error_notifier
from pydeck_carto.layer import MapType, CartoConnection

carto_auth = CartoAuth.from_oauth()

register_carto_layer()

layer = pdk.Layer(
    "CartoLayer",
    data="SELECT geom, event FROM carto-demo-data.demo_tables"
    ".spain_earthquakes where depth > ?",
    query_parameters=[2],
    type_=MapType.QUERY,
    connection=CartoConnection.CARTO_DW,
    credentials=get_layer_credentials(carto_auth),
    get_fill_color=[238, 77, 90],
    point_radius_min_pixels=2.5,
    pickable=True,
    on_data_error=get_error_notifier(),
)

view_state = pdk.ViewState(latitude=36, longitude=-7.44, zoom=5)

r = pdk.Deck(layer, map_style=pdk.map_styles.ROAD, initial_view_state=view_state)
r.to_html("carto_layer_geo_query_param.html", open_browser=True)
