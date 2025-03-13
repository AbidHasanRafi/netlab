import { FaWhatsappSquare, FaTelegram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t font-normal border-neutral-700 text-black dark:text-white py-4 text-center">
      <div className="flex items-center justify-center gap-3 lg:gap-4 my-3 text-base lg:text-xl">
        <a
          title="Email"
          className="dark:hover:text-neutral-400 hover:text-neutral-600"
          href="mailto:ahr16.abidhasanrafi@gmail.com"
        >
          <TfiEmail />
        </a>
        <a
          title="WhatsApp"
          className="dark:hover:text-neutral-400 hover:text-neutral-600"
          href="https://wa.me/qr/NCLUAEQTHC3LC1"
        >
          <FaWhatsappSquare />
        </a>
        <a
          title="Telegram"
          className="dark:hover:text-neutral-400 hover:text-neutral-600"
          href="https://t.me/AbidHasanRafi"
        >
          <FaTelegram />
        </a>
      </div>
      <p className="text-sm lg:text-base">
        &copy; {currentYear} -{" "}
        <Link to="/" title="NetLab">
          <span className="font-bold hover:underline">NetLab</span>
        </Link>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
