import CardTotalGlobalTracker from "../../atoms/cardTotalGlobalTracker/CardTotalGlobalTracker";
import iconDefault from "../../../assets/images/icons/covid-blue.svg";
import iconGreen from "../../../assets/images/icons/covid-green.svg";
import iconRed from "../../../assets/images/icons/covid-red.svg";
import iconRedark from "../../../assets/images/icons/covid-redark.svg";
import iconCall from "../../../assets/images/icons/telephone.svg"

export default function CardMoleculeGlobalTracker() {
return (
    <div className="containerCardsGlobalTracker2">
    <CardTotalGlobalTracker imgCardMoleculeGlobalTracker={iconDefault} textParagraphTotalGlobal="Total Confirmed" textContentGlobalTracker="1234567890"/>
    <CardTotalGlobalTracker imgCardMoleculeGlobalTracker={iconGreen} textParagraphTotalGlobal="Total Recovered" textContentGlobalTracker=""/>
    <CardTotalGlobalTracker imgCardMoleculeGlobalTracker={iconRed} textParagraphTotalGlobal="Total Deaths" textContentGlobalTracker=""/>
    <CardTotalGlobalTracker imgCardMoleculeGlobalTracker={iconRedark} textParagraphTotalGlobal=" New Deaths" textContentGlobalTracker=""/>
    <CardTotalGlobalTracker imgCardMoleculeGlobalTracker={iconCall} textParagraphTotalGlobal="Help Line No." textContentGlobalTracker="198"/>

    </div>
)
}
