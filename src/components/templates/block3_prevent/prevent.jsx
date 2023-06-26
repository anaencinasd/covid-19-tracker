import "./prevent.css"
import TittleBlock from "../../atoms/tittleBlock/TittleBlock"
import CardPrevent from "../../atoms/cardPrevent/CardPrevent"
import img_personal from "../../../assets/images/icon2_bg.png"
import img_social from "../../../assets/images/icon5_bg.png"
import img_clean from "../../../assets/images/icon6_bg.png"
import img_wash from "../../../assets/images/icon4_bg.png"
import img_respiratory from "../../../assets/images/breathing_bg.png"
import img_wear from "../../../assets/images/banner-right_bg.png"

export default function Prevent() {

    return(
        <>
        <div className="prevent-container">
            <TittleBlock text_block={'Prevent'} content_block= {'Best way to prevent is avoid virus'} />
            <div className="prevent-cards-container">
                <CardPrevent img_card={img_personal} tittle_content={'Personal contact'} text_content= {'Fever is a key symptom, expert say. Dont fixate a number , but know its really not a fever until your temperature reaches al least 100.'} />
                <CardPrevent img_card={img_wash} tittle_content={'Wash hands'} text_content= {'Maintain al least 1 metre (3 feet) distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected.'} /> 
                <CardPrevent img_card={img_social} tittle_content={'Social distancing'} text_content= {'Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick.'} />
                <CardPrevent img_card={img_respiratory} tittle_content={'Respiratory hygiene'} text_content= {'Maintair good respiratory hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze.'}/>
                <CardPrevent img_card={img_clean} tittle_content={'Clean AndDisinfect'} text_content= {'Fever is a key symptom, expert say. Dont fixate a number, but know its really not a fever until your temperature reaches al least 100.'} />
                <CardPrevent img_card={img_wear} tittle_content={'Wear a Facemask'} text_content= {'Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.'} />
            </div>

        </div>
        
        </>
    )
}
