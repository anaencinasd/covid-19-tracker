import './tittleBlock.css'

function TittleBlock(props) {

    return(
        <>
        <div className= "tittle-div">
            <h5>{props.text_block}</h5>
            <h2>{props.content_block}</h2>
        </div>
        </>
    )
}
export default TittleBlock