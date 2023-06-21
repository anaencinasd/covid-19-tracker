import TittleBlock from "../../atoms/tittleBlock/TittleBlock"
import "./block6_wash.css"

import wash1 from "../../../assets/images/wash1.png"
import wash2 from "../../../assets/images/wash2.png"
import wash3 from "../../../assets/images/wash3.png"
import wash4 from "../../../assets/images/wash4.png"
import wash5 from "../../../assets/images/wash5.png"
import wash6 from "../../../assets/images/wash6.png"

export default function Block6_wash() {
  return (
    <div className="washContainer">
      <TittleBlock text_block={"Wash"} content_block={"Wash your hands min 20 seconds"} />
      <div className="washingImages">
        <img src={wash1} alt="washing hands" />
        <img src={wash2} alt="washing hands" />
        <img src={wash3} alt="washing hands" />
        <img src={wash4} alt="washing hands" />
        <img src={wash5} alt="washing hands" />
        <img src={wash6} alt="washing hands" />
      </div>
      

        
      

    </div>
  )
}
