import CardTotalGlobalTracker from "../../atoms/cardTotalGlobalTracker/CardTotalGlobalTracker";
import iconDefault from "../../../assets/images/icons/covid-blue.svg";
import iconGreen from "../../../assets/images/icons/covid-green.svg";
import iconRed from "../../../assets/images/icons/covid-red.svg";
import iconRedark from "../../../assets/images/icons/covid-redark.svg";
import iconCall from "../../../assets/images/icons/telephone.svg";
import "./cardMoleculeGlobalTracker.css";

export default function CardMoleculeGlobalTracker() {
return (
    <div className="containerCardsGlobalTracker2">
    <CardTotalGlobalTracker 
    imgCardMoleculeGlobalTracker={iconDefault} 
    textParagraphTotalGlobal="Total Confirmed" 
    info="cases"/>

    <CardTotalGlobalTracker 
    imgCardMoleculeGlobalTracker={iconGreen} 
    textParagraphTotalGlobal="Total Recovered" 
    info="recovered"/>

    <CardTotalGlobalTracker 
    imgCardMoleculeGlobalTracker={iconRed} 
    textParagraphTotalGlobal="Total Deaths" 
    info="deaths"/>

    <CardTotalGlobalTracker 
    imgCardMoleculeGlobalTracker={iconRedark} 
    textParagraphTotalGlobal=" New Deaths" 
    info="todayDeaths"/>
    
    <div className="help"> 
        <img  className="iconHelp" src={iconCall} />
        <div className="paragraphAndNumber">
            <p className="paragraphHelp">Help Line No.</p>
            <h4 className="styleTotalGlobalTracker2">198</h4>
        </div>
    </div>

    </div>
)
}
