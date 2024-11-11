import globe2 from "../assets/globe2.png";
import Button from "./Button";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mb-10 md:px-12 lg:flex lg:flex-row lg:mt-14 "
      id="about"
    >
      <div className="p-8 lg:-ml-7">
        <h1 className=" flex  justify-center text-4xl lg:flex lg:justify-start">
          About
        </h1>
        <p className="lg:pr-7 lg:w-[35rem] font-light ">
          <br />
          At GeoSphere, we are passionate about unlocking the hidden wonders of
          the Earth.
          <br />
          <br />
          Our platform provides cutting-edge geological insights, empowering
          researchers, professionals, and enthusiasts to explore the planet like
          never before.
          <br />
          <br />
          Combining advanced data visualization tools with the latest in
          geological science, we help you understand everything from tectonic
          activity to mineral deposits.
          <br />
          <br />
          Whether you are a geologist, environmental scientist, or just curious
          about the natural world, GeoSphere offers the tools and resources you
          need to make informed decisions and discoveries.
          <br />
          <br />
          Our mission is to make geology accessible, insightful, and engaging
          for everyone.
          <br />
          <br />
          Join us on this journey of exploration and take your understanding of
          the Earth to the next level!
        </p>
        <Button
          className="hidden lg:flex lg:mt-5  lg:px-5 rounded-md hover:bg-color-3 "
          href="#pricing"
        >
          Get Started
        </Button>
      </div>
      <img
        src={globe2}
        alt="globe2"
        className="w-[325px] border-1 rounded-lg border-color-4 md:w-[600px] lg:w-[600px]"
      />
    </div>
  );
};

export default About;
