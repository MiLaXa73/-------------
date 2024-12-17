import { Outlet } from "react-router-dom";
import headerLogo from "../../public/icon/boulwarDepTxt.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <img src={headerLogo} alt="" className="headerLogo" />
          <p className="headertxt">тур</p>
          <p className="headertxt">музыка</p>
          <p className="headertxt">мерч</p>
        </header>
      </div>
      <Outlet></Outlet>
    </>
  );
};
export default Header;
