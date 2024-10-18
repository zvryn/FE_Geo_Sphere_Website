const Footer = () => {
  return (
    <div className="bg-color-1/50 text-color-4 flex flex-col justify-center items-center md:flex-row md:gap-32 lg:justify-between lg:px-24 p-8 font-light border-t ">
      <p className="mb-2 md:mb-0">
        © {new Date().getFullYear()}. All rights reserved.
      </p>
      <p>Created by Mr. Sarin Kanokyuraphan</p>
    </div>
  );
};

export default Footer;
