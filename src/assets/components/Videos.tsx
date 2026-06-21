import { FaUser } from "react-icons/fa";

export default function Videos() {
  const videos = [
    { icon: FaUser, number: "120+", tool: "Video Courses", image: "/images/chinese4.jpeg" },
  ];

  return (
    <div>
      <div className="mb-0 lg:mb-30">
        {videos.map((video, index) => (
          <div key={index}>
            {/* MOBILE & TABLET — hidden on lg */}
            <div className="lg:hidden flex flex-col items-center gap-4">
              <div className="border-white shadow-sm shadow-gray-300 w-30 rounded-lg h-10">
                <div className="flex flex-row ml-2 gap-2">
                  <video.icon className="w-5 h-5 text-black translate-y-2" />
                  <div className="flex flex-col translate-y-0.5">
                    <p className="text-sm font-bold text-black">{video.number}</p>
                    <p className="text-xs font-bold text-gray-500">{video.tool}</p>
                  </div>
                </div>
              </div>
              <img
                src={video.image}
                className="w-15 h-15 object-cover rounded-lg"
              />
            </div>

            {/* DESKTOP — your exact original, hidden below lg */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="border-white shadow-sm ml-10 shadow-gray-300 w-30 rounded-lg h-10">
                <div className="flex flex-row ml-2 gap-2">
                  <video.icon className="w-5 h-5 text-black translate-y-2" />
                  <div className="flex flex-col translate-y-0.5">
                    <p className="text-sm font-bold text-black">{video.number}</p>
                    <p className="text-xs font-bold text-gray-500">{video.tool}</p>
                  </div>
                </div>
              </div>
              <img
                src={video.image}
                className="w-15 h-15 object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}