import "./cardAtomTotalTracker.css";

function CardAtomTotalTracker(props){
return (
    <>
    <div className="containerCardTrack">
        <div className="containerTitleTrack">
            <h5 className="styleTitleTrack">{props.textContentTitleTrack}</h5>
            <hr />
            <h2 className={`styleTitleTrack2 ${props.className}`}>{props.textTitleTrack2}</h2>
        </div>
        <div className="containerImgTrack">
            <img className="imgIconTrack" src={props.imgCovidOpacity}/>
        </div>
    </div>
    
    
    </>
)
}

export default CardAtomTotalTracker;