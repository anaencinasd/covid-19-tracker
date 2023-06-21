import './cardSpread.css';

function CardSpreads(props){
    return(
        <div className='CardSpreadsStyle'>
            <img className='CardsSpreadsImage' src={props.imgSpread}></img>
            <div className='CardsSpreadsContent'>
                <h4>{props.tittle_content}</h4>
                <p>{props.text_content}</p>
            </div>
        </div>
    )
}

export default CardSpreads;