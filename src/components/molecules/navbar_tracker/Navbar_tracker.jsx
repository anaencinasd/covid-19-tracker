import "./navbar_tracker.css";
import { Icon } from "@iconify/react";
import logo from "../../../assets/images/coronavirus.png";


function Navbar_tracker() {


  return (
    <nav className="navigation">
      <div className="navbar_content">
        <a href="/">
        <img src={logo} alt="corona logo" id="logo1" />
        </a>
        <a href="/countryInfo" className="icon_link">
          <Icon icon="fluent:data-pie-20-regular" id="icon_tracker" width="2rem" 
          />
        </a>
        <a href="/countryTopTen" className="icon_link">
          <Icon icon="typcn:th-menu-outline" id="icon_tracker" width="2rem" />
        </a>
        <a href="#" className="icon_link">
          <Icon icon="ph:squares-four" id="icon_tracker" width="2rem" />
        </a>
        <a href="#" className="icon_link">
          <Icon icon="ph:folder-duotone" id="icon_tracker" width="2rem" />
        </a>
        <a href="#" className="icon_link">
          <Icon icon="solar:three-squares-outline" id="icon_tracker" width="2rem" />
        </a>
        <a href="#" className="icon_link">
          <Icon icon="uil:arrow-growth" id="icon_tracker" width="2rem" />
        </a>
        <a href="#" className="icon_link">
          <Icon icon="jam:world" id="icon_tracker" width="2rem" />
        </a>
        <a href="#" className="icon_link">
          <Icon icon="clarity:talk-bubbles-line" id="icon_tracker" width="2rem" />
        </a>
        <a href="#" className="icon_link">
          <Icon icon="ion:logo-flickr" id="icon_tracker" width="2rem" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar_tracker;
