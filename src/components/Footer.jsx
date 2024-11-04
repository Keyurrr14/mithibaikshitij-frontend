import { Link } from "react-router-dom";
import { footerLinksRight, socials } from "../../utils/data";

const Footer = () => {
  return (
    <footer
      className="font-lusitana font-bold px-6 md:px-20 py-12 md:py-20"
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
        <div className="flex flex-col gap-8 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            {/* Kshitij Logo and text  */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
              <img
                src="/assets/logo/logo.svg"
                alt="logo"
                className="w-24 md:w-32"
              />

              <img
                src="/assets/logo/text_logo.svg"
                alt="logo"
                className="w-32 md:w-48"
              />
            </div>

            {/* Socials section */}
            <div className="flex justify-center md:justify-start gap-5 flex-wrap">
              {socials.map((item) => (
                <Link to={item.link} key={item.id} target="_blank">
                  <img
                    src={item.icon}
                    alt={item.title}
                    width={`${item.id === 1 || item.id === 2 ? 50 : 40 && item.id === 4 || item.id === 5 ? 35 : 40} `}
                    className={`${
                      item.id === 2 ? "mt-4" : "mt-0"
                    } ${
                      item.id === 6 || item.id === 4 || item.id === 5 ? "mt-3" : "mt-2"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>

          <h3 className="text-sm text-center md:text-left mt-12 md:mt-40 max-sm:hidden">
            © 2024 by Mithibai Kshitij.
          </h3>
        </div>

        <div className="flex justify-center md:justify-end md:w-1/3">
          <div className="flex flex-col gap-4 md:gap-7">
            {footerLinksRight.map((item) => (
              <Link
                to={item.link}
                key={item.title}
                className="text-center md:text-left hover:text-gray-300 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
          <h3 className="text-sm text-center md:text-left mt-12 md:mt-40 sm:hidden">
            © 2024 by Mithibai Kshitij.
          </h3>
      </div>
    </footer>
  );
};

export default Footer;
