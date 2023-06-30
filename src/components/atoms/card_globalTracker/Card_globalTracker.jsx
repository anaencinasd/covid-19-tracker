import "./card_globalTracker.css";
import { useEffect, useState } from "react";
import CovidService from "../../../service/CovidService";
import DynamicUrl from "../../../service/DynamicUrl";

export default function card_globalTracker(props) {
    const [globalData, setGlobalData] = useState(null);
  
    useEffect(() => {
      const url = DynamicUrl(props.extension)
      CovidService(setGlobalData, url);
    }, [props.extension]);
  
    const cardStyle = `cardContainer ${props.style}`
    const updateContainerStyle = props.update ? "updateContainer" : "";
    const sign = props.update ? "+" : ""
  
    return (
      <div className={cardStyle}>
        <div><h5>{props.title}</h5></div>
        <div className={updateContainerStyle}>{sign}{globalData && globalData[props.update]}</div>
        <h4> {globalData != null ? ( `${globalData[props.info]}`) : ("Loading data")}</h4>
        
  
      </div>
    )
  
  }

