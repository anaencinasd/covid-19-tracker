import "./prevent.css"
import TittleBlock from "../../atoms/tittleBlock/TittleBlock"
import CardAtom from "../../atoms/cardAtom/CardAtom"

function Prevent() {

    return(
        <>
        <div className="symptom-container">
            <TittleBlock text_block={'symtom'} content_block= {'Basic Symptom Against Corona virus'} />
            <div className="cards-container">
                <CardAtom className="prevent-card" img_card={img1} tittle_content={'Aches and points'} text_content= {'Fever is a key symptom, expert say. Dont fixate a number , but know its really not a fever until your temperature reaches al least 100'} ></CardAtom>
                <CardAtom className="symptom-card"img_card={img2} tittle_content={'Runny nose'} text_content= {'People of all ages who experience fever and/or cough associated withdifficulty breathing/shortness of breath'} ></CardAtom>
                <CardAtom className="symptom-card"img_card={img3} tittle_content={'Sore throat'} text_content= {'Older people, and thoser with underlying medical problems like high clood pressure, heart and lung problems, diabetes or cander'} ></CardAtom>
                <CardAtom className="prevent-card" img_card={img1} tittle_content={'Aches and points'} text_content= {'Fever is a key symptom, expert say. Dont fixate a number , but know its really not a fever until your temperature reaches al least 100'} > </CardAtom>
                <CardAtom className="symptom-card"img_card={img2} tittle_content={'Runny nose'} text_content= {'People of all ages who experience fever and/or cough associated withdifficulty breathing/shortness of breath'} ></CardAtom>
                <CardAtom className="symptom-card"img_card={img3} tittle_content={'Sore throat'} text_content= {'Older people, and thoser with underlying medical problems like high clood pressure, heart and lung problems, diabetes or cander'} ></CardAtom>
            </div>

        </div>
        
        </>
    )
}
export default Prevent