import './cardSymptom.css'

function cardSymptom(props) {
    return(
    <>
        <div className="symptom-card-container">
            <img className="symptom-img-card" src={props.img_card} ></img>
            <h4 className="symptom-tittle-card">{props.tittle_content}</h4>
            <p className="symptom-text-card">{props.text_content} </p>


        </div>
    </>
    )
}

export default cardSymptom