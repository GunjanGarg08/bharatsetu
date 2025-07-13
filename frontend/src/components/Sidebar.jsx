import { Link, useLocation } from "react-router-dom";
import {
  Home,
  MessageCircle,
  FilePlus,
  FileText,
  MapPin,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: <Home size={18} />, to: "/dashboard" },
  {
    name: "Ask Question",
    icon: <MessageCircle size={18} />,
    to: "/dashboard/ask",
  },
  {
    name: "Simplify Document",
    icon: <FileText size={18} />,
    to: "/dashboard/simplify",
  },
  { name: "Geo Help", icon: <MapPin size={18} />, to: "/dashboard/geohelp" },
];

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="bg-gradient-to-b from-[#0f2f2e] to-[#042524] text-white w-70 min-h-screen px-6 py-6 shadow-xl fixed left-0 top-0 z-50 flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-extrabold mb-14 tracking-wide text-white">
          Bharat<span className="text-teal-400">Setu</span>
        </h1>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-2 rounded-md text-lg transition-all duration-200 ${
                pathname === item.to
                  ? "bg-teal-600 text-white font-semibold shadow-md relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-teal-400"
                  : "text-gray-300 hover:bg-[#134e4a] hover:text-white"
              }`}
            >
              {item.icon}
              <span className="truncate">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}