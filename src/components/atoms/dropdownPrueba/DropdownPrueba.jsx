import "./dropdownPrueba.css"
import DynamicUrl from "../../../service/DynamicUrl"
import CovidService from "../../../service/CovidService"
import {useEffect, useState} from "react"
import { FormControl, MenuItem, Select } from "@mui/material";

export default function DropdownPrueba() {
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState([])

  useEffect(()=>{
      const url = DynamicUrl({"countries"})
      CovidService(setCountries, url);
  }, [])
  const allCountriesList = countries
    .sort((a,b) => b.country - a.country)
    console.log(allCountriesList)
  
    const onCountryChange = e => {
    setCountries(e.target.value)
    //console.log(setCountries())
    }

        return (
            <div>
              <select onChange={onCountryChange}>
                <option value="">Select a country</option>
                {allCountriesList.map((country) => (
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



