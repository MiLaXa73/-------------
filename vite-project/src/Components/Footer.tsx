import "./footer.css";
import footerInst from "../../public/icon/insta.png";
import footerTg from "../../public/icon/telegram.png";
import footerVk from "../../public/icon/vk.png";
import footerMail from "../../public/icon/mail.png";

const FooterCategory = (props) => {
  return (
    <div className="footerCategory">
      <img src={props.icon} alt="" />
      <p className="footerCategoryTxt">{props.txt}</p>
    </div>
  );
};
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <p className="footerTitle">Контакты</p>
          <div className="footerCategories">
            <FooterCategory
              icon={footerInst}
              txt="@pluxury_sport"
            ></FooterCategory>
            <FooterCategory
              icon={footerVk}
              txt="vk.com/boulevardepo"
            ></FooterCategory>
            <FooterCategory
              icon={footerTg}
              txt="t.me/boulevardepo"
            ></FooterCategory>
            <FooterCategory
              icon={footerMail}
              txt="booking@mugen.world"
            ></FooterCategory>
          </div>
          <p className="privatePolicy">
            * Instagram принадлежит компании Meta, признанной экстремистской
            организацией и запрещенной в РФ
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
