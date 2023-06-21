import { useState, useEffect } from "react";

function CovidNews() {
  const [news, setNews] = useState([]);
  const [term, setTerm] = useState("covid");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "b6D1ynmSMysyQjx9AO6DVG2SEeJcoFWc";
        const response = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${apiKey}`
        );
        const news = await response.json();
        console.log(news.response.docs);
        setNews(news.response.docs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (<>
  <section>
    {news.map((article) =>{
        const{ headline: {main}, abstract, web_url, pub_date, _id, {images[0]["media-metadata"][0]["url"]} } = article
        

        return(
            <article key={_id}>
                <img/>
                <h4>{main}</h4>
                <h6>{pub_date}</h6>
                <p>{abstract}</p>
                <a href={web_url}>Continue</a>

            </article> 
        )



    })}
  </section>
  </>);
}

export default CovidNews;
