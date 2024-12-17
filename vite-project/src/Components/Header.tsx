import { Outlet, NavLink } from "react-router-dom";
import headerLogo from "../../public/icon/boulwarDepTxt.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <NavLink to={"/"}>
            <img src={headerLogo} alt="" className="headerLogo" />
          </NavLink>
          <NavLink to={"/h/tour"}>
            <p className="headertxt">тур</p>
          </NavLink>
          <NavLink to={"/h/music"}>
            <p className="headertxt">музыка</p>
          </NavLink>
          <NavLink to={"/h/shop"}>
            <p className="headertxt">мерч</p>
          </NavLink>
        </header>
      </div>
      <Outlet></Outlet>
    </>
  );
};
export default Header;
