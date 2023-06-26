import "./globaltracker.css"
import Card_globalTracker from "../atoms/card_globalTracker/Card_globalTracker"

export default function GlobalTracker() {
    return (
      <div className="trackerContainer">
        <h3>COVID-19 Tracker</h3>
        <Card_globalTracker
          extension="all"
          style="cardContainer-totalcase"
          title="Total cases"
          info="cases"
          update="todayCases"
        />
         <Card_globalTracker
          extension="all"
          style="cardContainer-active"
          title="Active"
          info="active"
        />
         <Card_globalTracker
          extension="all"
          style="cardContainer-recovered"
          title="Recovered"
          info="recovered"
          update="todayRecovered"
        />
         <Card_globalTracker
          extension="all"
          style="cardContainer-deaths"
          title="Deaths"
          info="deaths"
          update="todayDeaths"
        />
        
      </div>
    );
  }
  

