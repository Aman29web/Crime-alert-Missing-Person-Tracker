import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Replace with dynamic data later
const dangerZones = [
  {
    id: 1,
    title: "Street Harassment Zone",
    description: "Frequent harassment reported after 7 PM.",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: 2,
    title: "Snatching Hotspot",
    description: "Multiple mobile snatching cases reported.",
    lat: 28.5355,
    lng: 77.391,
  },
];

const redIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const UnsafeMap = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] font-[var(--font-heading)]">
          Map of Reported Unsafe Zones
        </h2>
        <p className="text-[var(--color-text-secondary)] font-[var(--font-body)] max-w-2xl mx-auto">
          These locations have been flagged by community members. Use this map to stay alert and report additional incidents.
        </p>

        {/* Map */}
        <div className="w-full h-[500px] mt-8 rounded-lg overflow-hidden shadow">
          <MapContainer
            center={[28.6139, 77.209]} // Default center (Delhi)
            zoom={11}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />

            {dangerZones.map((zone) => (
              <Marker key={zone.id} position={[zone.lat, zone.lng]} icon={redIcon}>
                <Popup>
                  <h3 className="font-bold">{zone.title}</h3>
                  <p className="text-sm">{zone.description}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default UnsafeMap;
