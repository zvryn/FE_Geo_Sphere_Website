import Button from "./Button";
import globe1 from "../assets/globe1.png";
const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center lg:flex-row">
      {/* Left Side - Content */}
      <div className="flex flex-col items-center justify-center px-10 md:px-36 lg:w-1/2 lg:items-start lg:px-28">
        <h1 className="text-2xl font-bold text-center  md:text-4xl lg:text-left lg:text-4xl lg:px-0 ">
          Explore the Earth Wisely with Geosphere
        </h1>
        <p className="text-center mt-3 lg:text-left font-light text-sm">
          Elevate your exploration with Geosphere. The ultimate platform for
          geological insights and data visualization.
        </p>
        <Button
          className="mt-5 px-5 rounded-md hover:bg-color-3"
          href="#pricing"
          aria-label="Get Started with Geosphere"
        >
          Get Started
        </Button>
      </div>

      {/* Right Side - Globe Image */}
      <div className=" mt-16 lg:mt-0 flex items-center justify-center lg:w-1/2">
        <img
          src={globe1}
          alt="Globe illustration"
          className="w-3/4 h-auto lg:w-3/4"
        />
      </div>
    </section>
  );
};

export default Hero;
