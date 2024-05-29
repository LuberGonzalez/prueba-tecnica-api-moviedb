import { TITTLE_APP } from "../../constants";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          &copy; {currentYear} {TITTLE_APP}. Todos Los Derechos Reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
