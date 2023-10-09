import Image from "next/image";
import { GeolocateControl, GeoJSONSource,Map, Marker, Source, Layer, FillLayer, LineLayer } from "react-map-gl";

const token = 'pk.eyJ1IjoiZ3VkemRldm9wcyIsImEiOiJjbGJtYWg3cDEwMng1M29tcTVwMGd6YW05In0.-ihQtrE-nJZ_C0CndwIQ0w';

const  data:any =  {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        // These coordinates outline Maine.
        'coordinates': [
            [
                [-67.13734, 45.13745],
                [-66.96466, 44.8097],
                [-68.03252, 44.3252],
                [-69.06, 43.98],
                [-70.11617, 43.68405],
                [-70.64573, 43.09008],
                [-70.75102, 43.08003],
                [-70.79761, 43.21973],
                [-70.98176, 43.36789],
                [-70.94416, 43.46633],
                [-71.08482, 45.30524],
                [-70.66002, 45.46022],
                [-70.30495, 45.91479],
                [-70.00014, 46.69317],
                [-69.23708, 47.44777],
                [-68.90478, 47.18479],
                [-68.2343, 47.35462],
                [-67.79035, 47.06624],
                [-67.79141, 45.70258],
                [-67.13734, 45.13745]
            ]
        ]
    }
}
const polygon2:any = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-67.23734, 45.13745],
        [-67.06466, 44.8097],
        [-68.13252, 44.3252],
        [-69.16, 43.98],
        [-70.21617, 43.68405],
        [-70.74573, 43.09008],
        [-70.85102, 43.08003],
        [-70.89761, 43.21973],
        [-71.08176, 43.36789],
        [-71.04416, 43.46633],
        [-71.18482, 45.30524],
        [-70.76002, 45.46022],
        [-70.40495, 45.91479],
        [-70.10014, 46.69317],
        [-69.33708, 47.44777],
        [-69.00478, 47.18479],
        [-68.3343, 47.35462],
        [-67.89035, 47.06624],
        [-67.89141, 45.70258],
        [-67.23734, 45.13745]
      ]
    ]
  }
};
const polygon4:any = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-67.43734, 45.13745],
        [-67.26466, 44.8097],
        [-68.33252, 44.3252],
        [-69.36, 43.98],
        [-70.41617, 43.68405],
        [-70.94573, 43.09008],
        [-71.05102, 43.08003],
        [-71.09761, 43.21973],
        [-71.28176, 43.36789],
        [-71.24416, 43.46633],
        [-71.38482, 45.30524],
        [-70.96002, 45.46022],
        [-70.60495, 45.91479],
        [-70.30014, 46.69317],
        [-69.53708, 47.44777],
        [-69.20478, 47.18479],
        [-68.5343, 47.35462],
        [-68.09035, 47.06624],
        [-68.09141, 45.70258],
        [-67.43734, 45.13745]
      ]
    ]
  }
};


        // Add a new layer to visualize the polygon.
        const fillLayer:FillLayer = {
            'id': 'maine',
            'type': 'fill',
            'source': 'maine', // reference the data source
            'layout': {},
            'paint': {
                'fill-color': '#0080ff', // blue color fill
                'fill-opacity': 0.8
            }
        };
        const fillLayer2:FillLayer = {
            'id': 'maine',
            'type': 'fill',
            'source': 'maine', // reference the data source
            'layout': {},
            'paint': {
                'fill-color': '#563d2d', // blue color fill
                'fill-opacity': 0.8
            }
        };
        // Add a black outline around the polygon.
        const outlineLayer:LineLayer = {
            'id': 'outline',
            'type': 'line',
            'source': 'maine',
            'layout': {},
            'paint': {
                'line-color': '#fff',
                'line-width': 2
            }
        };
const MapboxMap = ()=>  {
    
    return (
      <div className="w-screen h-screen">
        <Map 
          mapboxAccessToken={token}
          initialViewState={{
            latitude:  45.137451 ,longitude: -68.137343,
            zoom: 5}}
          mapStyle="mapbox://styles/abarad/clnhg6khw002x01nu3huc9rgs"
        >
            <Marker longitude={ -68.137343} latitude={ 45.137451}>
                <img width={50} height={50} src="https://cdn3d.iconscout.com/3d/premium/thumb/hut-8845899-7151170.png" />
            </Marker>
            <Source type="geojson" data={data}>
                <Layer {...fillLayer}/>
                <Layer {...outlineLayer}/>
            </Source>
            <Source type="geojson" data={polygon2}>
                <Layer {...fillLayer2}/>
                <Layer {...outlineLayer}/>
            </Source>
            <Source type="geojson" data={polygon4}>
                <Layer {...fillLayer2}/>
                <Layer {...outlineLayer}/>
            </Source>
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </Map>
      </div>
    );
  }
  export default MapboxMap;

