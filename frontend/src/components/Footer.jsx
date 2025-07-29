import arrow from "../assets/Footers/Arrow.png";

const Footer = () => {
  return (
    <div className="flex items-center gap-4 px-6 py-4 overflow-hidden mt-15">
      <img src={arrow} alt="arrow" className="w-12 shrink-0" />
      <div className="h-1 flex-grow bg-blue-400 rounded-full"></div>
    </div>
  );
};

export default Footer;
