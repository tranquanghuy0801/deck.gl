const connections = {
  'bigquery': 'bigquery',
  'snowflake': 'snowflake',
  'redshift': 'redshift',
  'databricks': 'databricks',
  'aurora': 'aurora'
}

export default {
  [connections.bigquery]: {
    quadkeys: [
        'carto-dev-data.public.derived_spatialfeatures_che_quadgrid15_v1_yearly_v2',
        'carto-dev-data.public.derived_spatialfeatures_che_quadgrid18_v1_yearly_v2',
        'carto-dev-data.public.derived_spatialfeatures_esp_quadgrid15_v1_yearly_v2',
        'carto-dev-data.public.derived_spatialfeatures_esp_quadgrid18_v1_yearly_v2',
        'carto-dev-data.public.derived_spatialfeatures_ukr_quadgrid15_v1_yearly_v2',
        'carto-dev-data.public.derived_spatialfeatures_ukr_quadgrid18_v1_yearly_v2',
        'carto-dev-data.public.derived_spatialfeatures_usa_quadgrid15_v1_yearly_v2',
        'carto-dev-data.public.derived_spatialfeatures_che_quadgrid15_v1_yearly_v2_quadkey',
        'carto-dev-data.public.derived_spatialfeatures_che_quadgrid18_v1_yearly_v2_quadkey',
        'carto-dev-data.public.derived_spatialfeatures_esp_quadgrid15_v1_yearly_v2_quadkey',
        'carto-dev-data.public.derived_spatialfeatures_esp_quadgrid18_v1_yearly_v2_quadkey',
        'carto-dev-data.public.derived_spatialfeatures_ukr_quadgrid15_v1_yearly_v2_quadkey',
        'carto-dev-data.public.derived_spatialfeatures_ukr_quadgrid18_v1_yearly_v2_quadkey',
        'carto-dev-data.public.derived_spatialfeatures_usa_quadgrid15_v1_yearly_v2_quadkey',
    ],
    h3: []
  },
  [connections.snowflake]: {
    quadkeys: [
      'carto_dev_data.public.derived_spatialfeatures_che_quadgrid15_v1_yearly_v2',
      'carto_dev_data.public.derived_spatialfeatures_che_quadgrid18_v1_yearly_v2',
      'carto_dev_data.public.derived_spatialfeatures_esp_quadgrid15_v1_yearly_v2',
      'carto_dev_data.public.derived_spatialfeatures_esp_quadgrid18_v1_yearly_v2',
      'carto_dev_data.public.derived_spatialfeatures_ukr_quadgrid15_v1_yearly_v2',
      'carto_dev_data.public.derived_spatialfeatures_ukr_quadgrid18_v1_yearly_v2',
      'carto_dev_data.public.derived_spatialfeatures_usa_quadgrid15_v1_yearly_v2',
    ],
    h3: []
  },
  [connections.redshift]: {
    quadkeys: [
      'public.derived_spatialfeatures_che_quadgrid15_v1_yearly_v2',
      'public.derived_spatialfeatures_che_quadgrid18_v1_yearly_v2',
      'public.derived_spatialfeatures_esp_quadgrid15_v1_yearly_v2',
      'public.derived_spatialfeatures_esp_quadgrid18_v1_yearly_v2',
      'public.derived_spatialfeatures_ukr_quadgrid15_v1_yearly_v2',
      'public.derived_spatialfeatures_ukr_quadgrid18_v1_yearly_v2',
      'public.derived_spatialfeatures_usa_quadgrid15_v1_yearly_v2',
    ],
    h3: [
      'public.derived_spatialfeatures_che_h3res10_v1_yearly_v2_interpolated',
      'public.derived_spatialfeatures_che_h3res12_v1_yearly_v2_interpolated',
      'public.derived_spatialfeatures_che_h3res8_v1_yearly_v2',
      'public.derived_spatialfeatures_esp_h3res10_v1_yearly_v2_interpolated',
      'public.derived_spatialfeatures_esp_h3res12_v1_yearly_v2_interpolated',
      'public.derived_spatialfeatures_esp_h3res8_v1_yearly_v2',
      'public.derived_spatialfeatures_ukr_h3res10_v1_yearly_v2_interpolated',
      'public.derived_spatialfeatures_ukr_h3res12_v1_yearly_v2_interpolated',
      'public.derived_spatialfeatures_ukr_h3res8_v1_yearly_v2',
      'public.derived_spatialfeatures_usa_h3res10_v1_yearly_v2_interpolated',
      'public.derived_spatialfeatures_usa_h3res8_v1_yearly_v2'
    ]
  },
  [connections.databricks]: {
    quadkeys: [
      'carto_dev_data.derived_spatialfeatures_che_quadgrid15_v1_yearly_v2',
      'carto_dev_data.derived_spatialfeatures_che_quadgrid18_v1_yearly_v2',
      'carto_dev_data.derived_spatialfeatures_esp_quadgrid15_v1_yearly_v2',
      'carto_dev_data.derived_spatialfeatures_esp_quadgrid18_v1_yearly_v2',
      'carto_dev_data.derived_spatialfeatures_ukr_quadgrid15_v1_yearly_v2',
      'carto_dev_data.derived_spatialfeatures_ukr_quadgrid18_v1_yearly_v2',
      'carto_dev_data.derived_spatialfeatures_usa_quadgrid15_v1_yearly_v2'
    ],
    h3: [
      'carto_dev_data.derived_spatialfeatures_che_h3res8_v1_yearly_v2',
      'carto_dev_data.derived_spatialfeatures_che_h3res10_v1_yearly_v2_interpolated',
      'carto_dev_data.derived_spatialfeatures_che_h3res12_v1_yearly_v2_interpolated',
      'carto_dev_data.derived_spatialfeatures_esp_h3res8_v1_yearly_v2',
      'carto_dev_data.derived_spatialfeatures_ukr_h3res8_v1_yearly_v2',
      'carto_dev_data.derived_spatialfeatures_usa_h3res8_v1_yearly_v2'
    ]
  },
  [connections.aurora]: {
    quadkeys: [
      'public.derived_spatialfeatures_che_quadgrid15_v1_yearly_v2',
      'public.derived_spatialfeatures_che_quadgrid18_v1_yearly_v2',
      'public.derived_spatialfeatures_esp_quadgrid15_v1_yearly_v2',
      'public.derived_spatialfeatures_esp_quadgrid18_v1_yearly_v2',
      'public.derived_spatialfeatures_ukr_quadgrid15_v1_yearly_v2',
      'public.derived_spatialfeatures_ukr_quadgrid18_v1_yearly_v2',
      'public.derived_spatialfeatures_usa_quadgrid15_v1_yearly_v2',
    ],
    h3: []
  }
}
