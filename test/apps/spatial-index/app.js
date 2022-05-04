/* global document */
/* eslint-disable no-console */
import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import {BASEMAP, MAP_TYPES, fetchLayerData} from '@deck.gl/carto';
import DeckGL from '@deck.gl/react';
import {H3HexagonLayer} from '@deck.gl/geo-layers';
import {QuadkeyLayer} from '@deck.gl/geo-layers';
import H3TileLayer from './H3TileLayer';
import BBoxTileLayer from './BBoxTileLayer.js';
import QuadkeyTileLayer from './QuadkeyTileLayer';
import Checkbox from './Checkbox';
import ObjectSelect from './ObjectSelect';
import Querybox from './Querybox';

const INITIAL_VIEW_STATE = {longitude: 7, latitude: 45.8039, zoom: 5.2, pitch: 30, bearing: 0};

const transitions = {getElevation: {type: 'spring', stiffness: 0.005, damping: 0.075}};

const RESOLUTIONS = [3, 4, 5, 6, 7, 8];

function Root() {
  const [extruded, setExtruded] = useState(false);
  const [outline, setOutline] = useState(false);
  const [h3, setH3] = useState(false);
  const [tilesUrl, setTilesUrl] = useState('');
  const [aggregationExp, setAggregationExp] = useState(
    'avg(population) as value, 0.1*avg(population) as elevation'
  );
  const [resolution, setResolution] = useState(4);
  const props = {aggregationExp, aggregationResLevel: resolution, extruded, outline, transitions, tilesUrl};

  useEffect(() => {
    async function getTilesUrl() {
      const {data} = await fetchLayerData({
        type: MAP_TYPES.TABLE,
        connection: 'bigquery',
        source: 'carto-dev-data.public.derived_spatialfeatures_che_quadgrid15_v1_yearly_v2',
        geoColumn: 'quadkey:quadint',
        aggregationExp,
        aggregationResLevel: resolution,
        maxResolution: 15,
        format: 'tilejson',
        credentials: { apiBaseUrl, accessToken }
      })
      setTilesUrl(data.tiles[0])
    }
    getTilesUrl()

  }, [])

  return (
    <>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={[h3 ? createH3TileLayer(props) : createQuadkeyTileLayer(props)]}
      >
        <StaticMap mapStyle={BASEMAP.VOYAGER_NOLABELS} />
      </DeckGL>
      <Checkbox label="Extruded" value={extruded} onChange={() => setExtruded(!extruded)} />
      <Checkbox label="Outline" value={outline} onChange={() => setOutline(!outline)} />
      <Checkbox label="H3/Quadkey" value={h3} onChange={() => setH3(!h3)} />
      <Querybox label="Execute" value={aggregationExp} onChange={e => setAggregationExp(e)} />
      <ObjectSelect
        title="resolution"
        obj={RESOLUTIONS}
        value={resolution}
        onSelect={setResolution}
      />
    </>
  );
}

const apiBaseUrl = 'http://localhost:8002'
const accessToken =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJYVnRIYUdzaTUxMFZZYml1YjA5ZCJ9.eyJodHRwOi8vYXBwLmNhcnRvLmNvbS9lbWFpbCI6ImFsYmVydG9AY2FydG9kYi5jb20iLCJodHRwOi8vYXBwLmNhcnRvLmNvbS9hY2NvdW50X2lkIjoiYWNfNnFyMWswYWQiLCJpc3MiOiJodHRwczovL2F1dGgubG9jYWwuY2FydG8uY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA4NDA5NTYzMzQxMzU5MDQxNjg0IiwiYXVkIjoiY2FydG8tY2xvdWQtbmF0aXZlLWFwaSIsImlhdCI6MTY1MTU4MTk4MywiZXhwIjoxNjUxNjY4MzgzLCJhenAiOiJGM2tKOVJoUWhFTUFodDFRQllkQUluckRRTXJKVlI4dSIsInNjb3BlIjoicmVhZDpjdXJyZW50X3VzZXIiLCJwZXJtaXNzaW9ucyI6WyJhZG1pbjphY2NvdW50IiwicmVhZDphY2NvdW50IiwicmVhZDphcHBzIiwicmVhZDpjb25uZWN0aW9ucyIsInJlYWQ6Y3VycmVudF91c2VyIiwicmVhZDppbXBvcnRzIiwicmVhZDpsaXN0ZWRfYXBwcyIsInJlYWQ6bWFwcyIsInJlYWQ6dGlsZXNldHMiLCJyZWFkOnRva2VucyIsInVwZGF0ZTpjdXJyZW50X3VzZXIiLCJ3cml0ZTphcHBzIiwid3JpdGU6Y29ubmVjdGlvbnMiLCJ3cml0ZTppbXBvcnRzIiwid3JpdGU6bGlzdGVkX2FwcHMiLCJ3cml0ZTptYXBzIiwid3JpdGU6dG9rZW5zIl19.TOhP1FcNHORHEyMn7nMn3NiljjDke5A7a2kE7FHKDlmvQ5UW1VOQNpfLuJX79Rg1IkvOmI0E5kOPyXMFp48yU__uHD290MSyR28XQ03ASdad7V59XcL2UjjAatwYVOTyW5vCMYcbKqgg7n3aF1swRkFo01tVjfcDYsDslIgXI09Ma2ngVZC55rS9-abq16wcPSV5OHcBd3gwim3Wb3xxexHeomlk1dHdK0L5Qx0jmT1IACe1LMyk7aSkPAYtBcKQwiWlLmmZka4FDsli9yJoIqBCu9T8qZKXd1gK8xyau-9q9M23gwVHo9tdgc68wntz4UU3ExPNijJzOsBW1QZpjA';



function createQuadkeyTileLayer(props) {
  const {aggregationResLevel, extruded, outline, transitions, tilesUrl} = props;

  return new QuadkeyTileLayer({
    // data: `http://localhost:8002/v3/maps/bigquery/table/{i}?name=carto-dev-data.public.derived_spatialfeatures_che_quadgrid15_v1_yearly_v2&geo_column=quadkey:quadint&aggregationExp=${aggregationExp}&aggregationResLevel=${aggregationResLevel}&maxResolution=15&access_token=${accessToken}`,
    data: tilesUrl,
    minZoom: 1,
    maxZoom: 14 - aggregationResLevel,
    tileSize: 512,
    elevationScale: 100,

    renderSubLayers: props => {
      return [
        new QuadkeyLayer(props, {
          _offset: props.tile.z,
          extruded: true,
          opacity: 0.3,
          getQuadkey: d => d.id,
          getFillColor: d => [
            Math.pow(d.properties.value / 200, 0.1) * 255,
            255 - d.properties.value,
            79
          ],
          getElevation: d =>
            extruded
              ? 'elevation' in d.properties
                ? d.properties.elevation
                : d.properties.value
              : 0,
          transitions,
          updateTriggers: {
            getElevation: [extruded]
          }
        }),
        outline && BBoxTileLayer(props.tile)
      ];
    },
    updateTriggers: {
      renderSubLayers: [extruded, outline]
    }
  });
}

function createH3TileLayer(props) {
  const {extruded, transitions} = props;
  return new H3TileLayer({
    data: 'data/{i}.json',
    minZoom: 0,
    maxZoom: 19,
    tileSize: 256,
    extent: [-112.5, 21.943045533438177, -90, 40.97989806962013],
    renderSubLayers: props => {
      const {data} = props;
      const {index} = props.tile;
      if (!data || !data.length) return null;

      return [
        new H3HexagonLayer(props, {
          centerHexagon: index,
          highPrecision: true,

          // Temp: 15-24
          getHexagon: d => d.spatial_index,
          getFillColor: d => [(d.temp - 14) * 28, 90 - d.temp * 3, (25 - d.temp) * 16],
          getElevation: d => (extruded ? d.temp - 14 : 0),
          elevationScale: 50000,
          transitions,
          updateTriggers: {
            getElevation: [extruded]
          }
        })
      ];
    },
    updateTriggers: {
      renderSubLayers: [extruded]
    }
  });
}

render(<Root />, document.body.appendChild(document.createElement('div')));