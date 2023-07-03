import "./cardTotalGlobalTracker.css"
import useFetch from "../../../service/useFetch";
import DynamicUrl from "../../../service/DynamicUrl";
import { useEffect, useState } from "react";

export default function CardTotalGlobalTracker(props) {

    const { data } = useFetch("all", DynamicUrl);
    const [globalData, setGlobalData] = useState(null);

    useEffect(() => {
        if (data) {
        setGlobalData(data);
    }
}, [data]);
return (
    
        <div className="cardTotalGlobalTracker2">
            <img className="imgMolecule" src={props.imgCardMoleculeGlobalTracker}/>
            <div className="containerTotalGlobalTracker2">
                <p className="styleParagraphTotalGlobal">{props.textParagraphTotalGlobal}</p>
                <h4 className="styleTotalGlobalTracker2"> {globalData != null ? ( `${globalData[props.info]}`) : ("Loading data")}</h4>
            </div>
        </div>
)
}
