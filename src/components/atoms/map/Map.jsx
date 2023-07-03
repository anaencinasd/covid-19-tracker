import "./map.css";
import { MapContainer, TileLayer } from "react-leaflet";

export default function Map({ center, zoom }) {
  return (
    <div className="leaflet-container">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}