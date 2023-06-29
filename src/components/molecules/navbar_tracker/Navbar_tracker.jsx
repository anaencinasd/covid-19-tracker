import "./navbar_tracker.css"
import logo from "../../../assets/images/coronavirus.png"
import pie from "../../../assets/images/data-pie-20-regular.svg"
import menu from "../../../assets/images/th-menu-outline.svg"
import square from "../../../assets/images/squares-four.svg"
import folder from "../../../assets/images/folder-duotone.svg"
import cascade from "../../../assets/images/three-squares-outline.svg"
import arrow from "../../../assets/images/arrow-growth.svg"
import world from "../../../assets/images/world.svg"
import talk from "../../../assets/images/talk-bubbles-line.svg"
import flickr from "../../../assets/images/logo-flickr.svg"

function Navbar_tracker() {
  return (
    <nav className="navigation">
       
            <div className="navbar_content">
                <ul>
                    <li className="logo1"><a href="#"><img src={logo} id="logo1"/></a></li>
                    <li><a href="#"><img src={pie} id="icon_tracker"/></a></li>
                    <li><a href="#"><img src={menu} id="icon_tracker"/></a></li>
                    <li><a href="#"><img src={square} id="icon_tracker"/></a></li>
                    <li><a href="#"><img src={folder} id="icon_tracker"/></a></li>
                    <li><a href="#"><img src={cascade} id="icon_tracker"/></a></li>
                    <li><a href="#"><img src={arrow} id="icon_tracker"/></a></li>
                    <li><a href="#"><img src={world} id="icon_tracker"/></a></li>
                    <li><a href="#"><img src={talk} id="icon_tracker"/></a></li>
                    <li><a href="#"><img src={flickr} id="icon_tracker"/></a></li>
                </ul>
            </div>
    </nav>
)}

export default Navbar_tracker





