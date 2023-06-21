import './cardAtom.css'

function CardAtom (props) {

    return (
        <>
        <div className={props.style}>
            <img className="img_card" src={props.img_card} ></img>
            <h4 className="tittle_content">{props.tittle_content}</h4>
            <p className="text_content">{props.text_content} </p>
        </div>
        </>
    )
}

export default CardAtom