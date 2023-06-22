import TittleBlock from "../../atoms/tittleBlock/TittleBlock"
import "./news.css"
import NewsCard from "../../atoms/news_card/NewsCard"



export default function News() {
  return (
    <div className="mainContainer">
        <TittleBlock text_block={"News"} content_block={"Latest news about coronavirus"} />
        <NewsCard />

        
    </div>
  )
}
