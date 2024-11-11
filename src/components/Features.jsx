import { benefits } from "../constants";
import globe4 from "../assets/globe4.png";

const Features = () => {
  return (
    <div id="features">
      <h1 className="flex justify-center text-4xl px-5 text-center ">
        Explore Smarter,
        <br />
        Not Harder with Geosphere
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 mt-10 p-10">
        {benefits.map((item) => (
          <div
            className="relative block p-6 border border-color-4 bg-color-4/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            key={item.id}
          >
            <div className="flex flex-col h-full">
              <h5 className="text-lg font-bold mb-4 text-color-1">
                {item.title}
              </h5>
              <p className="text-sm text-color-1 mb-6">{item.text}</p>
              <div className="mt-auto">
                <a
                  className="text-xs font-bold text-color-1 uppercase tracking-wider flex justify-end "
                  href="#explore"
                >
                  Explore more
                </a>
              </div>
            </div>
            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
              <img
                src={globe4}
                alt="globe4"
                width={380}
                height={362}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
