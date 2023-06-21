

function CardSpreads (props) {

    return (
        <>
        <div className={props.container}>
            <img className={props.imgSpread} src={props.img_card} ></img>
            <h4 className={props.tittle_content}>{props.tittle_content=""}</h4>
            <p className={props.text_content=""} ></p>
        </div>
        
        </>
    )
}

export default CardSpreads;