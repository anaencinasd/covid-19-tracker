import TittleBlock from "../../atoms/tittleBlock/TittleBlock";
import CardQuestion from "../../atoms/cardQuestions/CardQuestion";
import "./blockquestion.css";

export default function Questions() {
return (
    <div className="containerQuestion">
        <h5 className="question_style_h5">Faqs</h5>
        <TittleBlock style_title="styleQuestion" content_block="Frenquently Asked Questions" />
        <div className="contaniner_question_cards">
            <CardQuestion tittle_question={"01.How dos COVID-19 spread?"} text_content_question={"Data has shown that is speads form person to person among thos in close contact (within abour 6 feet, or 2 meters). The virus spreads by respiratory droplets released when  someone infected with the virus."} />
            <CardQuestion tittle_question={"0.4What does it mean to self-isolate?"}  />
            <CardQuestion tittle_question={"2.What are the symptomos of COVID-19?"} />
            <CardQuestion tittle_question={"05.Can childern or adolescents catch COVID-19?"} />
            <CardQuestion tittle_question={"3 Should I wear mask?"} />
            <CardQuestion tittle_question={"06.Is ther a vaccine or drug for COVID-19?"} text_content_question={"While some western , traditional or home remedies may provide comfort and alleviate symptoms of mil COVID-19, there are no medicines that have benn shown to pervent or cure the disease. WHO does not recommend self-medication with any medicines."} />
        </div>

    </div>
)
}


/*<div className="question">
            <CardQuestion tittle_content={"01.How dos COVID-19 spread?"} text_content={"Data has shown that is speads form person to person among thos in close contact (within abour 6 feet, or 2 meters). The virus spreads by respiratory droplets released when  someone infected with the virus."} />
            <CardQuestion tittle_content={"2.What are the symptomos of COVID-19?"} />
            <CardQuestion tittle_content={"3 Should I wear mask?"} />
            <CardQuestion tittle_content={"0.4What does it mean to self-isolate?"}  />
            <CardQuestion tittle_content={"05.Can childern or adolescents catch COVID-19?"} />
            <CardQuestion tittle_content={"06.Is ther a vaccine or drug for COVID-19?"} text_content={"While some western , traditional or home remedies may provide comfort and alleviate symptoms of mil COVID-19, there are no medicines that have benn shown to pervent or cure the disease. WHO does not recommend self-medication with any medicines."} />
        </div>
*/        
