import "./card_globalTracker.css";
import { useEffect, useState } from "react";
import useFetch from "../../../service/useFetch";
import DynamicUrl from "../../../service/DynamicUrl";

export default function card_globalTracker(props) {
  const { data } = useFetch("all", DynamicUrl);
  const [globalData, setGlobalData] = useState(null);

  useEffect(() => {
    if (data) {
      setGlobalData(data);
    }
  }, [data]);
  
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

