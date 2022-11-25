import { MapContainer, Polyline, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = ({coordinates, limeOptions}) => {
  return (
    <MapContainer center={coordinates[0]} zoom={12.5} scrollWheelZoom={false} style={{height: 400, width: "100%", zIndex: "10" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { coordinates && <Polyline pathOptions={limeOptions} positions={coordinates} /> }
    </MapContainer>
  )
}

export default Map