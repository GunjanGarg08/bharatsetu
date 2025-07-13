import { useAuth } from "../context/AuthContext";
import { useEffect, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ProfilePage() {
  const { user } = useAuth();
  const [lastLogin, setLastLogin] = useState("");
  const [avatar, setAvatar] = useState(null);
  const profileRef = useRef();

  useEffect(() => {
    if (user?.metadata?.lastSignInTime) {
      const date = new Date(user.metadata.lastSignInTime);
      setLastLogin(date.toLocaleString());
    }
  }, [user]);

  const downloadPDF = async () => {
    const canvas = await html2canvas(profileRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("BharatSetu_Profile.pdf");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const removeAvatar = () => setAvatar(null);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#b2f0e8] py-10 px-4">
      <div
        ref={profileRef}
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8"
      >

        <div className="w-full md:w-1/3 bg-[#b2f0e8] rounded-2xl p-6 flex flex-col items-center justify-center">
          <img
            src={
              avatar ||
              `https://api.dicebear.com/7.x/initials/svg?seed=${user.email}`
            }
            alt="Avatar"
            className="rounded-full w-40 h-40 border-8 border-teal-700 shadow mb-4 object-cover"
          />
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-1">
            {user.email}
          </h2>
          <p className="text-xl text-gray-700 mb-4">Citizen</p>

          <div className="flex gap-2">
            <label className="cursor-pointer bg-teal-700 text-white px-3 py-1 text-lg font-semibold rounded shadow">
              Upload Avatar
              <input type="file" hidden onChange={handleAvatarChange} />
            </label>
            {avatar && (
              <button
                className="bg-red-600 text-white px-3 py-1 text-lg font-semibold rounded shadow"
                onClick={removeAvatar}
              >
                Remove
              </button>
            )}
          </div>

          <div className="mt-6 text-center">
            <QRCodeSVG value={user.email} size={150} />
            <p className="text-xl text-gray-700 mt-1">Digital ID</p>
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-5xl font-extrabold text-gray-800 mb-4 border-b pb-1">
                Profile Overview
              </h2>
              <div className="space-y-2">
                <div>
                  <p className="text-xl text-gray-500">Email</p>
                  <p className="font-medium text-gray-800 text-lg">{user.email}</p>
                </div>
                <div>
                  <p className="text-xl text-gray-500">User ID</p>
                  <p className="text-lg text-gray-600 font-mono break-all">
                    {user.uid}
                  </p>
                </div>
                <div className="flex flex-wrap gap-20 mt-4">
                  <div>
                    <p className="text-xl text-gray-500">Last Login</p>
                    <p className="font-semibold text-gray-800 text-lg">
                      {lastLogin || "Just now"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xl text-gray-500">Role</p>
                    <p className="font-semibold text-gray-800 text-lg">Citizen</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={downloadPDF}
              className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-full shadow text-xl font-semibold"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}