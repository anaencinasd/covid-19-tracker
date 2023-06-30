import DynamicUrl from "../../../service/DynamicUrl"
import CovidService from "../../../service/CovidService"
import "./card_top10.css"
import { useEffect, useState } from "react";




export default function Card_top10(props) {
    const [countryData, setCountryData] = useState([]);

    useEffect(()=>{
        const url =DynamicUrl("countries")
        CovidService(setCountryData, url);
    }, []);
    //console.log(countryData)
    const topTenCountries = countryData
    .sort((a,b) => b[props.type] - a[props.type])
    .slice(0,10)
    //console.log(topTenCountries4Cases)
    
    
    return (
        <div className="cardContainerTop">
            <h3>{props.tittle_top10} </h3>
            
            {topTenCountries.map((element) => (
            <div key={element.country} className="countryContainer">
                
                <img src={element.countryInfo.flag} alt={element.country} className="flagStyle" />
                
                <div>{element.country}</div>
                <div>{element[props.type]}</div>
            </div>
            
            ))} 

        </div>

)

}

    