import './cardPrevent.css'

function CardPrevent(props) {

    return(
        <>
        <div className="prevent-card-container">
            <img className="prevent-img-card" src={props.img_card} ></img>
            <div className="prevent-text">
                <h4 className="prevent-tittle-card">{props.tittle_content}</h4>
                <p className="prevent-text-card">{props.text_content} </p>
            </div>
        </div>
        </>

    );
}
export default CardPrevent