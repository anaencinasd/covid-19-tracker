import FooterColumn from "../../atoms/footer_column/Footer_column"
import "./footer.css"
import logo from "../../../assets/images/logo-white.png"
import { MdFacebook } from "react-icons/md";



export default function Footer() {
  return (
    <div className="footercontainer">
      <div className="columnsContainer">
        <div className="footerBlock">
          <img src={logo} alt="logo" />
          <p>These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.</p>
          <div className="iconsContainer">
            <MdFacebook/>

          </div>
        </div>
        <FooterColumn title="Quick Links">
            <li>Prevention</li>
            <li>Quarantine</li>
            <li>About</li>
            <li>Help</li>

        </FooterColumn>
        <FooterColumn title="About">
            <li>Hand Wash</li>
            <li>Social Distance</li>
            <li>Isolate</li>
            <li>Difference</li>

        </FooterColumn>
        <FooterColumn title="Recommendations">
            <li>Hand Wash</li>
            <li>Social Distance</li>
            <li>Isolate</li>
            <li>Difference</li>

        </FooterColumn>
        </div>
        <div className="Copyright">
          <p>Copyright 2023. All Rigths Reserved</p>
          <p>Design by <h5>NOMBRE DEL GRUPO</h5></p>
        </div>
        
    </div>
  )
}

