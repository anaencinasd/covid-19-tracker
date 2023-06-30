import "./dropdown.css"
import DynamicUrl from "../../../service/DynamicURL"
import CovidService from "../../../service/CovidService"
import {useEffect, useState} from "react"

export default function Dropdown() {
    const[countries, setCountries] = useState([])

    useEffect(()=> {
        const url = DynamicUrl("countries")
        CovidService(setCountries, url);
    }, [])

    

        return (
            <div>
              <select name="countries">
                {countries.map((country) => (
                  <option key={country.id} 
                  value={country.id}
                  >
                    {country.country}
                  </option>
                ))}
              </select>
            
             
            </div>
          );  
      
        
    }



