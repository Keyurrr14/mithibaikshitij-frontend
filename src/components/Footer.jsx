import { Link } from "react-router-dom";
import { footerLinksRight } from "../../utils/data";

const Footer = () => {
  return (
    <footer
      className="font-manrope font-semibold"
      style={{ padding: "5rem", paddingBottom: "2rem" }}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-2">
            {/* Kshitij Logo and text  */}
            <div className="flex flex-row gap-2 justify-start items-center w-full">
              <img
                src="/assets/logo/logo.svg"
                alt="logo"
                height={130}
                width={130}
              />

              <img
                src="/assets/logo/text_logo.svg"
                alt="logo"
                height={200}
                width={200}
              />
            </div>

            {/* Socials clickable and specific add krna baaki hai */}
            <div className="w-full">
              <img src="/assets/logo/socials.svg" alt="socials" width={400} />
            </div>
          </div>

          <h3 className="text-sm" style={{ marginTop: "10rem" }}>
            © 2024 by Mithibai Kshitij.
          </h3>
        </div>

        <div className="flex w-1/3 justify-end">
          <div className="flex flex-col gap-7">
            {footerLinksRight.map((item) => (
              <Link
                to={item.link}
                key={item.title}
                className="text-left hover:text-gray-300 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
