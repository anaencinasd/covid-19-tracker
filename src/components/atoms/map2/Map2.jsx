import DynamicUrl from "../../../service/DynamicUrl";
import useFetch from "../../../service/useFetch";
import { useEffect, useState } from "react";
import { CountryContext } from "react-svg-worldmap";
import WorldMap from "react-svg-worldmap";
import "./map2.css";

function Map2() {
  const { data } = useFetch("countries", DynamicUrl);
  const [countryData, setCountryData] = useState([]);
 
  useEffect(() => {
    if (data) {
      setCountryData(data);
    }
  }, [data]);

const datosMapa = countryData
    .map(elem=>{
      return {
        country: elem?.countryInfo?.iso2 == null ? "": elem?.countryInfo?.iso2, 
        value: elem?.cases == null ? 0: elem?.cases,
        cases: elem?.cases == null ? 0: elem?.cases,
        deaths: elem?.deaths == null ? 0: elem?.deaths,
        active: elem?.active == null ? 0: elem?.active,
        recovered: elem?.recovered == null ? 0: elem?.recovered,
        countryFull: elem?.country == null ? "": elem?.country,
      }
    })

  function localizeData(a){
    if (typeof a === "undefined") return "";
    const pais = datosMapa.find((b) => a === b.country.toLocaleLowerCase());
    if (pais) {
    return `
      (${pais.countryFull})             
      -
      Casos: ${pais.cases} 
      Muertes: ${pais.deaths} 
      Activos: ${pais.active} 
      Recuperados: ${pais.recovered}`
    }
    return "";
  }

  const getLocalizedText = ({
    countryCode,
  }= CountryContext) =>
    `${localizeData(countryCode.toLocaleLowerCase())}`;
  
const getStyle = ({
  countryValue,
  countryCode,
  minValue,
  maxValue,
}= CountryContext) => ({
  fill: countryCode === "US" ? "blue" : "blue",
  fillOpacity: countryValue
    ? 0.1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue)
    : 0,
  stroke: "green",
  strokeWidth: 1,
  strokeOpacity: 0.2,
  cursor: "pointer",
});

return (
    <div className="Map2">
    <h4>{datosMapa.length > 0 ? ( ` `) : ("Loading MAP data")}</h4>
      <WorldMap
        color="blue"
        size="xl"
        data={datosMapa}
        styleFunction={getStyle}
        tooltipTextFunction={getLocalizedText}
        richInteraction
        frame
      />
    </div>
  );
}

export default Map2