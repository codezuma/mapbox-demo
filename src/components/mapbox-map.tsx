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

        // Add a new layer to visualize the polygon.
        const fillLayer:FillLayer = {
            'id': 'maine',
            'type': 'fill',
            'source': 'maine', // reference the data source
            'layout': {},
            'paint': {
                'fill-color': '#0080ff', // blue color fill
                'fill-opacity': 0.5
            }
        };
        // Add a black outline around the polygon.
        const outlineLayer:LineLayer = {
            'id': 'outline',
            'type': 'line',
            'source': 'maine',
            'layout': {},
            'paint': {
                'line-color': '#000',
                'line-width': 3
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
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </Map>
      </div>
    );
  }
  export default MapboxMap;

