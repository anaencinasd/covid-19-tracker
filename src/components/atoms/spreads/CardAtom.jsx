
function CardAtom (props) {

    return (
        <>
        <div className="card-div">
            <div>
            <img src={props.img_card} ></img>
            </div>
            <h4>{props.tittle_content}</h4>
            <p>{props.text_content} </p>
        </div>
        </>
    )
}

export default CardAtom
