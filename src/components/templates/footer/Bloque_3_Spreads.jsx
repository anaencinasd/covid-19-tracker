import CardAtom from '../atoms/spreads/CardAtom';
import TittleBlock from '../atoms/tittleBlock/TittleBlock';
import imgFacemask from "../../../assets/images/p-1.jpg"
import imgYourHangs from "../../../assets/images/p-2.jpg"
import React from 'react'

function Bloque_3_Spreads() {
return (
    <div>
            <TittleBlock>

                    <div className="title-spreads"  text_block="Spreads" content_block="Disease spreads from person to person">
                            <div>
                                <CardAtom img_card={imgFacemask} tittle_content={'Wear Facemask'} text_content= {'Fever is a key symptom, experts say. Dont fixate on a number, but know its really not a fever until your temperature reaches at least 100'} ></CardAtom>
                                <CardAtom img_card={imgYourHangs} tittle_content={'Wash your hangs often'} text_content= {'Coughing is another key symptom, but its not just any cough, said Schaffner. It Should be a dry cough that you fell in your chest'} ></CardAtom>

                            </div>

                    </div>
            </TittleBlock>
        </div>

        )
}



export default Spreads