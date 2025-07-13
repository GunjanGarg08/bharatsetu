import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserShield,
  FaFemale,
  FaChild,
  FaFirstAid,
  FaCloudShowersHeavy,
  FaMale,
} from "react-icons/fa";

const GeoHelp = () => {
  const [location, setLocation] = useState(null);
  const [stations, setStations] = useState([]);
  const [showList, setShowList] = useState(false);
  const [loading, setLoading] = useState(true);
  const [copiedStationId, setCopiedStationId] = useState(null);

  const policeIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  const fetchNearbyPoliceStations = async (lat, lon) => {
    setLoading(true);
    try {
      const query = `
        [out:json];
        (
          node["amenity"="police"](around:20000,${lat},${lon});
          way["amenity"="police"](around:20000,${lat},${lon});
          relation["amenity"="police"](around:20000,${lat},${lon});
        );
        out center;
      `;
      const response = await axios.post(
        "https://overpass-api.de/api/interpreter",
        query,
        { headers: { "Content-Type": "text/plain" } }
      );

      const results = response.data.elements.map((item) => ({
        id: item.id,
        name: item.tags?.name || "Unnamed Police Station",
        lat: item.lat || item.center?.lat,
        lon: item.lon || item.center?.lon,
        tags: item.tags,
      }));

      setStations(results);
    } catch (error) {
      console.error("Overpass error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = pos.coords;
        const userLocation = { lat: coords.latitude, lon: coords.longitude };
        setLocation(userLocation);
        fetchNearbyPoliceStations(coords.latitude, coords.longitude);
      },
      (err) => {
        console.error("Location error:", err);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-teal-50 py-10 px-4 md:px-12">
      <h2 className="text-5xl font-extrabold text-teal-700 mb-6 flex items-center gap-3">
        <FaMapMarkerAlt className="text-pink-600" size={40} />
        Legal Help Near You
      </h2>

      {location && (
        <div className="rounded-3xl overflow-hidden shadow-lg mb-8">
          <MapContainer
            center={[location.lat, location.lon]}
            zoom={13}
            style={{ height: "420px", width: "100%" }}
            className="rounded-xl"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            />
            {stations.map((station) => (
              <Marker
                key={station.id}
                position={[station.lat, station.lon]}
                icon={policeIcon}
              >
                <Popup>
                  <strong>{station.name}</strong>
                  <br />
                  📍 {station.lat.toFixed(4)}, {station.lon.toFixed(4)}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}

      <div className="text-center mb-10">
        <button
          onClick={() => setShowList(!showList)}
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-2 rounded-full shadow transition text-2xl"
        >
          {showList ? "Hide Station List" : "Show Nearby Police Stations"}
        </button>
      </div>

      {showList && (
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {stations.map((station) => (
            <div
              key={station.id}
              className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-2xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-5 mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                  alt="Police"
                  className="w-12 h-12"
                />
                <h3 className="font-bold text-3xl text-teal-800">
                  {station.name}
                </h3>
              </div>

              <div className="text-gray-700 text-lg space-y-1 pl-1 my-5">
                <p>
                  <span className="font-lg text-teal-600">Location:</span>{" "}
                  {station.lat.toFixed(4)}, {station.lon.toFixed(4)}
                </p>
                {station.tags?.operator && (
                  <p>
                    <span className="font-xl text-teal-600">🏢 Operator:</span>{" "}
                    {station.tags.operator}
                  </p>
                )}
                {station.tags?.phone && (
                  <p>
                    <span className="font-medium text-teal-600">📞 Phone:</span>{" "}
                    {station.tags.phone}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <button
                  className={`px-4 py-1.5 rounded-full text-white text-lg font-medium transition ${
                    copiedStationId === station.id
                      ? "bg-green-600"
                      : "bg-teal-600 hover:bg-teal-700"
                  }`}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${station.name}, Lat: ${station.lat}, Lon: ${station.lon}`
                    );
                    setCopiedStationId(station.id);
                    setTimeout(() => setCopiedStationId(null), 5000);
                  }}
                >
                  {copiedStationId === station.id ? "Copied!" : "Copy Info"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12">
        <h3 className="text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <FaPhoneAlt className="text-teal-600 animate-pulse" size={40} />
          National Legal & Emergency Helplines
        </h3>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: "Police Emergency",
              number: "100",
              desc: "For immediate police assistance.",
              icon: <FaUserShield className="text-rose-600" size={40}/>,
              tel: "100",
            },
            {
              title: "Women Helpline",
              number: "1091",
              desc: "Support for women in distress.",
              icon: <FaFemale className="text-pink-500" size={40}/>,
              tel: "1091",
            },
            {
              title: "Child Helpline",
              number: "1098",
              desc: "Help for children in need.",
              icon: <FaChild className="text-yellow-500" size={40}/>,
              tel: "1098",
            },
            {
              title: "Ambulance",
              number: "102",
              desc: "Emergency medical services.",
              icon: <FaFirstAid className="text-red-400" size={40}/>,
              tel: "102",
            },
            {
              title: "Disaster Management",
              number: "108",
              desc: "Natural/man-made disaster support.",
              icon: <FaCloudShowersHeavy className="text-indigo-500" size={40}/>,
              tel: "108",
            },
            {
              title: "Senior Citizen Helpline",
              number: "14567",
              desc: "Support for elderly citizens.",
              icon: <FaMale className="text-purple-500" size={40}/>,
              tel: "14567",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200"
            >
              <p className="font-semibold text-2xl text-gray-800 flex items-center gap-4">
                {item.icon} {item.title}
              </p>
              <p className="text-gray-600 mt-2 text-lg">{item.desc}</p>
              <p className="text-teal-700 text-3xl font-bold mt-3">
                {item.number}
              </p>
              <a
                href={`tel:${item.tel}`}
                className="mt-4 inline-block px-4 py-2 bg-teal-600 text-white rounded-full text-xl font-bold hover:bg-teal-700 transition"
              >
                Call Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeoHelp;