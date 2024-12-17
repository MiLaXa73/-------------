import "./main.css";
import CardImage1 from "../../public/img/MainCard1.png";
import CardImage2 from "../../public/img/MainCard2.png";
import CardImage3 from "../../public/img/MainCard3.png";
import txtImage from "../../public/icon/boulwarDepTxt.png";
import MainImg from "../../public/img/MainImg.png";
import { NavLink } from "react-router-dom";

import MainCard from "./MainCard";
const Main = () => {
  return (
    <>
      <main className="">
        <div className="container">
          <img src={txtImage} alt="" className="mainTxt" />
          <img src={MainImg} alt="" />
          <p className="mainTitle">Россия тур 2025</p>
          <div className="maincards">
            <NavLink to="/h/tour">
              <MainCard image={CardImage1}></MainCard>
            </NavLink>
            <NavLink to="/h/shop">
              <MainCard image={CardImage2}></MainCard>
            </NavLink>
            <NavLink to="/h/music">
              <MainCard image={CardImage3}></MainCard>
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;
