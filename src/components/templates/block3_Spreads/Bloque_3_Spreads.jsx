import CardAtom from "../../atoms/cardAtom/CardAtom";
import TittleBlock from "../../atoms/tittleBlock/TittleBlock";
import spreadimg1 from "../../../assets/images/p-1.jpg";
import spreadimg2 from "../../../assets/images/p-2.jpg";
import spreadimg3 from "../../../assets/images/p-3.jpg";
import spreadimg4 from "../../../assets/images/p-4.jpg";
import spreadimg5 from "../../../assets/images/p-5.jpg";
import spreadimg6 from "../../../assets/images/p-6.jpg";
import "./bloque3_spreads.css"

function Spreads() {
return (
    <>
    <TittleBlock text_block="Spreads" content_block="Disease spreads from person to person" />
        <div className="spreads_container">
            <CardAtom className="img_spread" img_card={spreadimg1} tittle_content={'Wear Facemask'} text_content= {'Fever is a key symptom, experts say. Dont fixate on a number, but know its really not a fever until your temperature reaches at least 100'} ></CardAtom>
            <CardAtom img_card={spreadimg2} tittle_content={'Wash your hangs often'} text_content= {'Coughing is another key symptom, but its not just any cough, said Schaffner. It Should be a dry cough that you fell in your chest.'} ></CardAtom>
            <CardAtom img_card={spreadimg3} tittle_content={'Keep social distance'} text_content= {'Shortness of breath can a third -- and very serious -- manifestation of Covid-19, and it can occur on its own, without a cough.'} ></CardAtom>
            <CardAtom img_card={spreadimg4} tittle_content={'Wear Facemask'} text_content= {'Fever is a key symptom, experts say. Dont fixate on a number, but know its really not a fever until your temperature reaches at least 100'} ></CardAtom>
            <CardAtom img_card={spreadimg5} tittle_content={'Wash your hangs often'} text_content= {'Coughing is another key symptom, but its not jus any cough, said Schaffner. It should be a dry cough that you feel in your chest.'} ></CardAtom>
            <CardAtom img_card={spreadimg6} tittle_content={'Keep social distance'} text_content= {'Shortness of beath can be a third -- and very serious -- manifestatios of Covid-19, and it can occur on its own, without a cough.'} ></CardAtom>
        </div>
    </>
        
        )
}



export default Spreads;