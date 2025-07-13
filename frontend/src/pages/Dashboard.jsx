import { FaPlusCircle, FaFileAlt, FaGavel, FaPenFancy } from "react-icons/fa";
import background from "../assets/dashboard_background.png";

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen bg-[#d0f4f3] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 blur-0 opacity-80"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/50 z-0" />

      <div className="relative z-10 p-8 max-w-7xl mx-auto">
        <div className="w-full lg:w-2/3 space-y-10">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 drop-shadow">BharatSetu</h1>
            <p className="text-3xl font-semibold text-gray-800 mt-2 drop-shadow">
              Welcome to Your Legal Assistance Hub
            </p>
            <p className="text-xl text-gray-700 mt-1">
              Simplifying justice access for millions, one click at a time.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {[
              { count: "12.5K", label: "Queries Answered" },
              { count: "8K", label: "Documents Simplified" },
              { count: "5K", label: "Citizens Helped Locally" },
              { count: "5K", label: "Citizens Helped" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-200"
              >
                <h2 className="text-5xl font-bold text-teal-700">{stat.count}</h2>
                <p className="text-gray-700 mt-1 text-2xl">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 drop-shadow">
              What You Can Do on BharatSetu
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaPlusCircle size={30} className="text-teal-600" />,
                  title: "Ask Legal Question",
                  desc: "Get personalized legal answers instantly from our AI assistant."
                },
                {
                  icon: <FaFileAlt size={30} className="text-teal-600" />,
                  title: "Simplify Document",
                  desc: "Upload and receive easy-to-understand versions of legal documents."
                },
                {
                  icon: <FaGavel size={30} className="text-teal-600" />,
                  title: "Nearby Legal Help",
                  desc: "Find the closest police stations or legal aid centers in your area."
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-5 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow hover:scale-[1.02] hover:shadow-lg transition-all duration-200 ease-in-out"
                >
                  <div>{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}