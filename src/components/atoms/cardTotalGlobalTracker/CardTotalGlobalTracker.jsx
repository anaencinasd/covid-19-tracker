import "./cardTotalGlobalTracker.css"

export default function CardTotalGlobalTracker(props) {
return (
    
        <div className="cardTotalGlobalTracker2">
            <img className="imgMolecule" src={props.imgCardMoleculeGlobalTracker}/>
            <div className="containerTotalGlobalTracker2">
                <p className="styleParagraphTotalGlobal">{props.textParagraphTotalGlobal}</p>
                <h5 className="styleTitleGlobalTracker">{props.textContentGlobalTracker}</h5>
            </div>
        </div>
)
}
