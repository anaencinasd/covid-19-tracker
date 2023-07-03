import "./dropdown.css";
import { useState, useEffect } from "react";
import useFetch from "../../../service/useFetch";
import DynamicUrl from "../../../service/DynamicUrl";
import CardAtomTotalTracker from "../cardTotal/CardAtomTotalTracker";
import iconCoviDefaultOpacity from "../../../assets/images/icons/covid-default-opacity.svg";
import iconCovidRedOpacity from "../../../assets/images/icons/covid-red-opacity.svg";
import iconCovidGreenOpacity from "../../../assets/images/icons/covid-green-opacity.svg";
import iconCovidBlueOpacity from "../../../assets/images/icons/covid-blue-opacity.svg";
import iconCovidOrangeOpacity from "../../../assets/images/icons/covid-orange-opacity.svg";
import iconCovidRedarkOpacity from "../../../assets/images/icons/covid-redark-opacity.svg";
import Map from "../map/Map";

const Dropdown = () => {
  const { data } = useFetch("countries", DynamicUrl);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [mapCenter, setMapCenter]=useState({lat:34.80746, lng:-404796})
  const [mapZoom, setMapZoom]=useState(3);

  useEffect(() => {
    if (selectedCountry) {
      const countryInfo = data.find(
        (country) => country.country === selectedCountry
      );
      setCountryData(countryInfo);
      setLastUpdated(new Date());
    } else {
      setCountryData(null);
      setLastUpdated(null);
    }
  }, [selectedCountry, data]);

  const handleSelectionChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <div className="dropdown-selector">
        <select
          value={selectedCountry}
          onChange={handleSelectionChange}
          className="selector"
        >
          <option value="">Select a country</option>
          {data &&
            data.map((country) => (
              <option key={country.country} value={country.country}>
                {country.country}
              </option>
            ))}
        </select>
        {lastUpdated && (
          <p className="last-updated">
            Last Updated: {lastUpdated.toLocaleString()}
          </p>
        )}
      </div>
      <div className="cardsMapContainer">
          {countryData && (
            <div className="containerMoleculeCardTracker">
              <CardAtomTotalTracker
                textContentTitleTrack="Total Cases"
                className="cardDefault"
                textTitleTrack2={countryData.cases}
                imgCovidOpacity={iconCoviDefaultOpacity}
              />
              <CardAtomTotalTracker
                textContentTitleTrack="Total Deaths"
                className="cardRed"
                textTitleTrack2={countryData.deaths}
                imgCovidOpacity={iconCovidRedOpacity}
              />
              <CardAtomTotalTracker
                textContentTitleTrack="Total Recovered"
                className="cardGreen"
                textTitleTrack2={countryData.recovered}
                imgCovidOpacity={iconCovidGreenOpacity}
              />
              <CardAtomTotalTracker
                textContentTitleTrack="Total Active"
                className="cardBlue"
                textTitleTrack2={countryData.active}
                imgCovidOpacity={iconCovidBlueOpacity}
              />
              <CardAtomTotalTracker
                textContentTitleTrack="Today Cases"
                className="cardOrange"
                textTitleTrack2={countryData.todayCases}
                imgCovidOpacity={iconCovidOrangeOpacity}
              />
              <CardAtomTotalTracker
                textContentTitleTrack="Today Deaths"
                className="cardRedark"
                textTitleTrack2={countryData.todayDeaths}
                imgCovidOpacity={iconCovidRedarkOpacity}
              />
            </div>
          )}
          <div className="map">
            <Map center={mapCenter} zoom={mapZoom} />
          </div>
          </div>
        </div>
      
  );
};

export default Dropdown;
