import TittleBlock from "../../atoms/tittleBlock/TittleBlock"
import "./block7_getApp.css"
import phone from "../../../assets/images/phone-1.png"


function Block7_getApp() {
  return (
    <div className="getAppContainer">
        <div className="block7textContainer">
    <TittleBlock style_title="block7title" content_block={"Get the simple app for latest news"}/>
    <p className="block7p">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold</p>
    <div className="block7infoContainer">DOWNLOAD NOW</div>
    </div>
    <div className="block7imageContainer">
        <img className="iphone" src={phone}/>
    </div>
  </div>
  )
}

export default Block7_getApp