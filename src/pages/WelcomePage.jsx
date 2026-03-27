import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover brightness-110"
      >
        <source src="/connect.mp4" type="video/mp4" />
      </video>

      {/* ✅ LIGHT OVERLAY (fixed) */}
      <div className="absolute inset-0 bg-white bg-opacity-10"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center">

       <h1 className="text-6xl font-extrabold 
text-white drop-shadow-[0_0_25px_#38bdf8]">
  CONNECT
</h1><br />
<br />
<br />

        <button
          onClick={() => navigate("/about")}
          className="px-5 py-1 bg-gray-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg transition duration-300"
        >
          Enter
        </button>

      </div>
    </div>
  );
}

export default Welcome;