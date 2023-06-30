import "./cardMoleculeTotalTracker.css";
import CardAtomTotalTracker from "../../atoms/cardTotal/CardAtomTotalTracker";
import iconCoviDefaultOpacity from "../../../assets/images/icons/covid-default-opacity.svg";
import iconCovidRedOpacity from "../../../assets/images/icons/covid-red-opacity.svg";
import iconCovidGreenOpacity from "../../../assets/images/icons/covid-green-opacity.svg";
import iconCovidBlueOpacity from "../../../assets/images/icons/covid-blue-opacity.svg";
import iconCovidOrangeOpacity from "../../../assets/images/icons/covid-orange-opacity.svg";
import iconCovidRedarkOpacity from "../../../assets/images/icons/covid-redark-opacity.svg";

function CardMoleculeTotalTracker() {
return (
    <div className="containerMoleculeCardTracker">
        
        <CardAtomTotalTracker textContentTitleTrack={"Total Case"} className="cardDefault" textTitleTrack2={"11111111"} imgCovidOpacity={iconCoviDefaultOpacity}/>
        <CardAtomTotalTracker textContentTitleTrack={"Total Deaths"}  className="cardRed" textTitleTrack2={"22222222"} imgCovidOpacity={iconCovidRedOpacity}/>
        <CardAtomTotalTracker textContentTitleTrack={"Total Recoveres"}  className="cardGreen" textTitleTrack2={"3333"} imgCovidOpacity={iconCovidGreenOpacity}/>
        <CardAtomTotalTracker textContentTitleTrack={"Total Active"}  className="cardBlue" textTitleTrack2={"444444"} imgCovidOpacity={iconCovidBlueOpacity}/>
        <CardAtomTotalTracker textContentTitleTrack={"New Cases"}  className="cardOrange" textTitleTrack2={"555555"} imgCovidOpacity={iconCovidOrangeOpacity}/>
        <CardAtomTotalTracker textContentTitleTrack={"New Deaths"}  className="cardRedark" textTitleTrack2={"66666"} imgCovidOpacity={iconCovidRedarkOpacity}/>
    
    </div>
)
}

export default CardMoleculeTotalTracker;