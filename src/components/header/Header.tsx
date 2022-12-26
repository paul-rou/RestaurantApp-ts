import logo from "./food-2.svg";
import "./style.css";

const Header = () => {
    return (
        <div className="header">
          <nav className="header-container">
            <div className="header-title">
              <img src={logo} className="header-logo" alt="logo" />
              <h2 className="header-h2">
                Where can I eat?
              </h2>
            </div>
            
            <h4 className="header-h4">
              Assignment
            </h4>
        </nav>
        </div>
    )
}

export default Header;