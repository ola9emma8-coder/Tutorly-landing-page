import NavBar from "./Navbar";
import Experts from "./Experts";
import Heading from "./Heading";
import Videos from "./Videos";

export default function Herosection() {
  const images = ["/images/author.jpeg", "/images/author2.jpeg", "/images/man2.jpeg"];

  return (
    <div>
      <NavBar />

      {/* MOBILE & TABLET — hidden on lg */}
      <section className="lg:hidden w-full min-h-fit mt-2 px-4 border-gray-300">
        <div className="bg-white w-fit max-w-full shadow-sm block m-auto mt-10 px-4 h-10">
          <div className="flex justify-center translate-y-3 gap-3 items-center">
            <div className="flex flex-row">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="rounded-full object-cover w-5 h-5 -ml-1 first:ml-0 border border-white"
                />
              ))}
            </div>
            <p className="text-black font-bold text-xs whitespace-nowrap">
              125k+ student reviews
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mt-8">
          <Heading />
          <Experts />
          <Videos />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8">
          <img
            src="/images/chinese2.jpeg"
            className="rounded-lg w-full sm:w-1/4 h-40 sm:h-50 object-cover"
          />
          <img
            src="/images/laptop.jpeg"
            className="rounded-lg w-full sm:flex-1 h-48 sm:h-50 object-cover"
          />
          <img
            src="/images/chinese.jpeg"
            className="rounded-lg w-full sm:w-1/4 h-40 sm:h-50 object-cover"
          />
        </div>
      </section>

      {/* DESKTOP — your exact original, hidden below lg */}
      <section
        id="background"
        className="hidden lg:block w-270 min-h-150 mt-2 m-auto border-gray-300"
      >
        <div className="bg-white w-70 shadow-sm block m-auto mt-20 h-10">
          <div className="flex justify-center translate-y-3 gap-3 items-center">
            <div className="flex flex-row">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="rounded-full object-cover w-5 h-5"
                />
              ))}
            </div>

            <p className="text-black font-bold text-xs">125k+ student reviews</p>
          </div>
        </div>
        <div className="flex justify-center gap-3 items-end mt-3">
          <div className="flex-1 flex justify-center">
            <Experts />
          </div>
          <div className="flex-1 flex justify-center">
            <Heading />
          </div>
          <div className="flex-1 flex justify-center">
            <Videos />
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-5">
          <img
            src="/images/chinese2.jpeg"
            className="rounded-lg w-40 h-50 object-cover"
          />
          <img
            src="/images/laptop.jpeg"
            className="rounded-lg w-120 h-50 object-cover"
          />
          <img
            src="/images/chinese.jpeg"
            className="rounded-lg w-40 h-50 object-cover"
          />
        </div>
      </section>
    </div>
  );
}