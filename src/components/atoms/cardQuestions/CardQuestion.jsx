import "./questions.css";

function CardQuestion(props) {
return (
    <div className='cardQuestion'>
        <h4 className="stylequestion">{props.tittle_question}</h4>
        <p className="stylequestion">{props.text_content_question}</p>
    </div>
    
    )
}

export default CardQuestion;