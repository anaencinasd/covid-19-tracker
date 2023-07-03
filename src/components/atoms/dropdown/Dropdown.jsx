import "./dropdown.css"
import DynamicUrl from "../../../service/DynamicUrl"
import CovidService from "../../../service/CovidService"
import {useEffect, useState} from "react"
import CardAtomTotalTracker from "../cardTotal/CardAtomTotalTracker"

export default function Dropdown() {
    const[countries, setCountries] = useState([])

    useEffect(()=> {
        const url = DynamicUrl("countries")
        CovidService(setCountries, url);
    }, [])

    

        return (
            <div>
              
              <select onChange={handleCountryChange}>
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.country} value={country.country}>
                  {country.country}
                </option>
              ))}
              </select>
                <div>
                  
                </div>
            </div>
          );  
      
        
    }



