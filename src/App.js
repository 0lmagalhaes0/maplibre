import * as React from 'react';
import Map from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  return (
    <Map
      initialViewState={{
        latitude: 54.688,
        longitude: 25.2797,
        zoom: 14,
        pitch: 55
      }}
      mapLib={maplibregl}
      style={{width: window.innerWidth, height: window.innerHeight}}
      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL"
    ></Map>
  );
}

export default App;