import terrain from "../assets/terrain.png";
import crystal from "../assets/crystal.png";
import water from "../assets/water.png";
import check from "../assets/checkmark.png";
import globe3 from "../assets/globe3.png";
import { geoSphereServices } from "../constants";

const Services = () => {
  return (
    <div id="services">
      <div>
        <h1 className="flex justify-center text-4xl px-10 text-center ">
          Geosphere made for explorers.
        </h1>
        <p className="flex justify-center py-3">
          Unlocks the power of exploration
        </p>
      </div>
      <div className="relative px-10">
        <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border bg-color-1/50 border-color-4 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 md:-left-14 lg:-left-24 lg:w-3/4 ">
            <img
              className="w-full h-full object-cover opacity-30 md:object-right md:opacity-70"
              width={800}
              alt="terrain"
              height={730}
              src={terrain}
            />
          </div>

          <div className="relative z-1 max-w-[17rem] ml-auto">
            <h1 className="text-3xl mb-4">3D Terrain Visualization</h1>
            <p className="mb-[3rem] text-n-3">
              Geosphere demonstate geographic in 3D for better analysis
            </p>
            <ul className="">
              {geoSphereServices.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-4 border-t border-color-4"
                >
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[39rem] border border-color-4 rounded-3xl overflow-hidden bg-color-1/50">
            <div className="absolute inset-0 top-52 md:w-3/4">
              <img
                src={crystal}
                className="h-full w-full object-cover opacity-70"
                width={630}
                height={750}
                alt="crystal"
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-start p-8 lg:p-15">
              <h4 className="text-3xl mb-4">Smart Resource Analysis</h4>
              <p className=" mb-[3rem] text-color-4">
                Leverage advanced data algorithms to provide precise insights
                into mineral deposits, water resources, and energy reserves.
              </p>
            </div>
          </div>

          <div className="relative min-h-[39rem] border border-color-4 rounded-3xl overflow-hidden bg-color-1/50">
            <div className="absolute top-0 inset-0 w-3/4 left-32 md:w-3/5 md:left-80">
              <img
                src={water}
                className="h-full w-full object-cover opacity-70"
                width={630}
                height={750}
                alt="crystal"
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-start px-8 pr-24 md:pr-96 md:top-[400px] top-44">
              <h4 className="text-3xl mb-4">Report Generation</h4>
              <p className=" mb-[3rem] text-color-4">
                The world’s most powerful report generation engine. What will
                you create?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center p-16">
        <img src={globe3} alt="globe3" className=" w-3/4 object-contain " />
      </div>
    </div>
  );
};

export default Services;
