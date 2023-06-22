import { useState, useEffect } from "react";
import "../templates/block8_news/news.css"

function CovidNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "b6D1ynmSMysyQjx9AO6DVG2SEeJcoFWc";
        const response = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&api-key=${apiKey}`
        );
        const news = await response.json();
        setNews(news.response.docs.slice(0,3));
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
     
        {news.map((article) => {
          const {
            headline: { main },
            abstract,
            web_url,
            pub_date,
            _id,
            multimedia,
          } = article;

          let imageUrl = "https://static01.nyt.com/" + multimedia[0].url;
          return (
           
            <article  className="new" key={_id}>
              <img src={imageUrl} alt={main} />
              <h3>{main}</h3>
              <h6>{pub_date}</h6>
              <p>{abstract}</p>
              <a href={web_url}>Continue</a>
            </article>
            
          );
        })}
      
    </>
  );
}

export default CovidNews;
