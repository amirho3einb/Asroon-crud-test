import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.png";
const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <div className="logoImage">
          <Link to="/">
            <img src={logoImage} />
          </Link>
        </div>
      </header>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
