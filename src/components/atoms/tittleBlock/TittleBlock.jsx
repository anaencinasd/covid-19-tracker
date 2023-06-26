import './tittleBlock.css'

function TittleBlock(props) {

    return(
        <>
        <div className= "tittle-div">
            <h5 className="text-block">{props.text_block}</h5>
            <h2 className={props.style_title}>{props.content_block}</h2>
        </div>
        </>
    )
}
export default TittleBlock