import chevron from "../assets/customers/chevron.png";
import ptt from "../assets/customers/ptt.png";
import scg from "../assets/customers/scg.png";
import shell from "../assets/customers/shell.png";
import tesla from "../assets/customers/tesla.png";

const CompanyLogos = () => {
  return (
    <div className="hidden lg:flex lg:flex-col h-auto">
      <h5 className="mb-10 text-center font-light">
        HELPING PEOPLE EXPLORE THE EARTH AT
      </h5>
      <ul className="flex flex-wrap justify-center  mb-10 space-x-8">
        {/* Chevron Logo */}
        <li className="flex items-center justify-center  border-color-4 border-2 rounded-md">
          <img
            src={chevron}
            className="w-[100px] h-[100px] object-contain"
            alt="chevron"
          />
        </li>
        {/* PTT Logo */}
        <li className="flex items-center justify-center  border-color-4 border-2 rounded-md">
          <img
            src={ptt}
            className="w-[100px] h-[90px] object-contain"
            alt="ptt"
          />
        </li>
        {/* SCG Logo */}
        <li className="flex items-center justify-center  border-color-4 border-2 rounded-md">
          <img
            src={scg}
            className="w-[100px] h-[80px] object-contain"
            alt="scg"
          />
        </li>
        {/* Shell Logo */}
        <li className="flex items-center justify-center  border-color-4 border-2 rounded-md">
          <img
            src={shell}
            className="w-[100px] h-[100px] object-contain"
            alt="shell"
          />
        </li>
        {/* Tesla Logo */}
        <li className="flex items-center justify-center  border-color-4 border-2 rounded-md">
          <img
            src={tesla}
            className="w-[100px] h-[80px] object-contain"
            alt="tesla"
          />
        </li>
      </ul>
    </div>
  );
};

export default CompanyLogos;
