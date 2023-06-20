import TittleBlock from "../../atoms/tittleBlock/TittleBlock"
import "./block6_wash.css"
import wash from "../../../assets/images/wash.png"

export default function Block6_wash() {
  return (
    <div className="washContainer">
      <TittleBlock text_block={"Wash"} content_block={"Wash your hands min 20 seconds"} />
      <img src={wash} alt="imágenes para lavar las manos" />

        
      

    </div>
  )
}
