import "./cardDataLanding.css";
import DynamicUrl from "../../../service/DynamicUrl";
import CovidService from "../../../service/CovidService"
import { useEffect, useState } from "react";


export default function CardDataLanding() {
  const [countryData, setCountryData] = useState([]);

  useEffect(()=>{
      const url = DynamicUrl("countries");
      CovidService(setCountryData, url);

  }, []);
    const randomCountry =  countryData
    .sort(() => Math.random() > 0.5 ? 1 : -1)
    .slice(0,1)
    //console.log(randomCountry)
    
  

 


return (
  <div className="cardDataLanding">
          {randomCountry.map((element, data) => (
          <div key={data} className="cardDataLandingContainer">
              <div className="flagLandingContainer">
                <img src={element.countryInfo.flag} alt={element.country} className="flagLanding" />
                <h4 className="countryNameLanding">{element.country}</h4>
              </div>
              <div className="infoLandingContainer">

              <h6 className="casesLanding">Cases {element.cases}</h6>
              <h6 className="activeLanding">Active {element.active}</h6>
              <h6 className="recoveredLanding">Recovered {element.recovered}</h6>  
              </div>
          </div>
      ))}  
  </div>
)
}
