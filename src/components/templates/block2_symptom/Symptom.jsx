import "./symptom.css"
import TittleBlock from "../../atoms/tittleBlock/TittleBlock"
import CardAtom from "../../atoms/cardAtom/CardAtom"
import img1 from "../../../assets/images/banner-right.png"
import img2 from "../../../assets/images/cough.svg"
import img3 from "../../../assets/images/breathing.svg"


function Symptom(){
    return(
        <>
        <div className="symptom-container">
            <TittleBlock text_block={'symtom'} content_block= {'Basic Symptom Against Corona virus'} />
            <div className="cards-container">
                <CardAtom className="symptom-card-1" img_card={img1} tittle_content={'Aches and points'} text_content= {'Fever is a key symptom, expert say. Dont fixate a number , but know its really not a fever until your temperature reaches al least 100'} ></CardAtom>
                <CardAtom className="symptom-card-1"img_card={img2} tittle_content={'Runny nose'} text_content= {'People of all ages who experience fever and/or cough associated withdifficulty breathing/shortness of breath'} ></CardAtom>
                <CardAtom className="symptom-card-1"img_card={img3} tittle_content={'Sore throat'} text_content= {'Older people, and thoser with underlying medical problems like high clood pressure, heart and lung problems, diabetes or cander'} ></CardAtom>
            </div>
        </div>
        </>
    )
}
export default Symptom