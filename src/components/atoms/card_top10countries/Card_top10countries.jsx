import DynamicUrl from "../../../service/DynamicUrl"
import CovidService from "../../../service/CovidService"
import "./card_top10countries.css"
import { useEffect, useState } from "react";




export default function Card_top10countries() {
    const [countryData, setCountryData] = useState([]);

    useEffect(()=>{
        const url =DynamicUrl("countries")
        CovidService(setCountryData, url);
    }, []);

    const topTenCountries = countryData
    .sort((a,b) => b.active -a.active)
    .slice(0,10)
    
  return (
    <div className="cardContainerTop">
        <h3>Top 10 countries (by active cases)</h3>
        <ul className="listStyle">
            <li className="cardsStyle">
            {topTenCountries.map((element) => (
            <div key={element.country} className="countryContainer">
                <div>
                    <img src={element.countryInfo.flag} alt={element.country} className="flagStyle" />
                </div>
                <div>{element.country}</div>
                <div>{element.active}</div>
                
            </div>
        ))}
                
            </li>
        </ul>
       
        
        
    </div>
  )
}
