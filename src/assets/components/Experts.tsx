import { FaUser } from "react-icons/fa";

export default function Experts() {
  const experts = [
    { icon: FaUser, number: "100+", tool: "Expert tutor", image: "/images/chinese1.jpeg" },
  ];

  return (
    <div>
      <div>
        {experts.map((expert, index) => (
          <div key={index} className="flex flex-col self-end mb-10 gap-4">
            {/* MOBILE & TABLET — hidden on lg */}
            <div className="lg:hidden flex flex-col items-center gap-4">
              <div className="border-white shadow-sm shadow-gray-300 w-30 rounded-lg h-10">
                <div className="flex flex-row ml-2 gap-2">
                  <expert.icon className="w-5 h-5 text-black translate-y-2" />
                  <div className="flex flex-col translate-y-0.5">
                    <p className="text-sm font-bold text-black">{expert.number}</p>
                    <p className="text-xs font-bold text-gray-500">{expert.tool}</p>
                  </div>
                </div>
              </div>
              <img
                src={expert.image}
                className="w-15 h-15 object-cover rounded-lg"
              />
            </div>

            {/* DESKTOP — your exact original, hidden below lg */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="border-white shadow-sm shadow-gray-300 w-30 rounded-lg h-10">
                <div className="flex flex-row ml-2 gap-2">
                  <expert.icon className="w-5 h-5 text-black translate-y-2" />
                  <div className="flex flex-col translate-y-0.5">
                    <p className="text-sm font-bold text-black">{expert.number}</p>
                    <p className="text-xs font-bold text-gray-500">{expert.tool}</p>
                  </div>
                </div>
              </div>
              <img
                src={expert.image}
                className="w-15 h-15 ml-20 object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}