import DynamicUrl from "../../../service/DynamicURL"
import CovidService from "../../../service/CovidService"
import "./card_top10countries.css"
import { useEffect, useState } from "react";




export default function Card_top10countries(props) {
    const [country, setCountry] = useState(null);

    useEffect(()=>{
        const url =DynamicUrl(props.extension)
        CovidService(setCountry, url);
    }, [props.extension]);

  return (
    <div>
        
    </div>
  )
}
