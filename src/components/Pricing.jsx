import { pricing } from "../constants";
import check from "../assets/checkmark.png";

const Pricing = () => {
  return (
    <div>
      <div className="mt-10 ">
        <h1 className="flex justify-center text-4xl px-24 text-center ">
          Pay once, use forever
        </h1>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 mb-1 mt-2 p-10 mx-3 lg:mx-16">
          {pricing.map((item) => (
            <div
              className="relative block p-6 border border-color-4 bg-color-1/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              key={item.id}
            >
              <div className="flex flex-col h-auto">
                <h5 className="text-2xl font-medium mb-10 text-color-4">
                  {item.title}
                </h5>

                {item.price !== "" ? (
                  <p className="text-color-4 mb-[1.75rem] ">
                    <span className="text-2xl font-thin">$</span>
                    <span className="text-[3rem] font-bold ml-4">
                      {item.price}
                    </span>
                  </p>
                ) : (
                  <div className="mb-6 h-[4.75rem]"></div>
                )}
              </div>
              <button className="w-full text-2xl border border-color-4 p-2 rounded-xl bg-color-4 text-color-1 font-bold">
                {item.price ? "Get started" : "Contact us"}
              </button>
              <ul className="flex flex-col mt-5 lg:mb-16 lg:mt-12">
                <li key={item.id} className="flex items-start py-4  border-t">
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">{item.text1}</p>
                </li>
                <li key={item.id} className="flex items-start py-4 border-t ">
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">{item.text2}</p>
                </li>
                <li key={item.id} className="flex items-start py-4 border-t ">
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">{item.text3}</p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center font-light mb-10">
        <a href="#home">SEE FULL DETAILS</a>
      </div>
    </div>
  );
};

export default Pricing;
