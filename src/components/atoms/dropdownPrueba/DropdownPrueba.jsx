import "./dropdownPrueba.css"
import "../../molecules/cardMoleculeTotalTracker/cardMoleculeTotalTracker.css"
import DynamicUrl from "../../../service/DynamicUrl"
import CovidService from "../../../service/CovidService"
import {useEffect, useState} from "react"




export default function DropdownPrueba(props) {
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState([])

  useEffect(()=>{
      const url = DynamicUrl("countries")
      CovidService(setCountries, url);
  }, [])
  //const allCountriesList = countries
   // .sort((a,b) => b.country - a.country)
   // console.log(allCountriesList)
    
  const onCountryChange = async (e) => {
    const countryExtension= e.target.value;
    console.log(countryExtension)
    const url = DynamicUrl(`countries/${countryExtension}`)
    CovidService(setCountryInfo, url);

    console.log(countryInfo)
  
  }

        return (
          <>
            <div>
              <select onChange={onCountryChange}>
                <option value="">Select a country</option>
                {countries.map((element) => (
                <option key={element.country} value={element.country}>
                    {element.country}
                  </option>
                ))}
              </select>

            </div>
            <div className="containerCardTrack">
                <div className="containerTitleTrack">
                    <h5 className="styleTitleTrack">{countryInfo.country} </h5>
                    <hr />
                    <h2 className="styleTitleTrack2">{countryInfo.active}</h2>
                </div>
                <div className="containerImgTrack">
                    <img className="imgIconTrack" src={props.imgCovidOpacity}/>
              </div>
              
            </div>
          </>
          );  
      
        
  }



