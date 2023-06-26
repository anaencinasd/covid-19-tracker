import "./block1.css"
import Navbar from "../../organisms/Navbar"
import lady from "../../../assets/images/banner-right-image1.png"
import arrow from "../../../assets/images/right-arrow.svg"
import headphone from "../../../assets/images/headphone.svg"
import cart from "../../../assets/images/cart.svg"


function Block1() {
return (
    <div className='block1'>
        <Navbar/>
        <div className="block1container">
            <div className="block1iconsContainer">
                <img src={arrow} id="icon"/>
                <img src={headphone} id="icon"/>
                <img src={cart} id="icon"/>
            </div>
            <div className="block1textContainer">
                <h1 className="block1title">Stay Home, And Prayer For Victim Of Corona virus.</h1>
                <p className="block1p">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. The corono virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances.</p>
                <div className="block1infoContainer"></div>
            </div>
            <div className="block1imageContainer">
                <img className="block1image"src={lady} id="lady1" />
            </div>
        </div>
       
       

    </div>
)
}

export default Block1