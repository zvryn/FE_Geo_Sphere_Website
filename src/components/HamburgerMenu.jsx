import globe1 from "../assets/globe1.png";

const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src={globe1}
          width={688}
          height={953}
          alt="Background"
        />
      </div>
    </div>
  );
};

export default HamburgerMenu;
