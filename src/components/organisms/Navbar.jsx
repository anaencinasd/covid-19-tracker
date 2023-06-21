import "./navbar.css"
import down_arrow from "../../assets/images/arrow.svg"
import logo from "../../assets/images/logo-white.png"

function Navbar(){
    return(
        <>
    <header className="header">
            <a className="logo-navbar" href="index.html"><img src={logo} alt="logo" id="logo"/></a>
            <input type="checkbox" id="check"/>  
            <label htmlFor="check" className="menu-view">
            &#x2261;
            </label>
            <nav className="menu">
                <a href="#1">Home <img src={down_arrow} alt="down arrowç" id="down"/></a>
                <a href="#">Prevention</a>
                <a href="#3">Qurantine</a>
                <a href="#">Pages <img src={down_arrow} alt="down arrow" id="down"/></a>
                <a href="#">About</a>
                <a href="#">Help</a>
                <a href="https://factoriaf5.org/" id="tracker">Tracker</a>
                <label htmlFor="check" className="menu-hide">
                    &#215;
                </label>
            </nav>
    </header>
        </>
    )
}
export default Navbar