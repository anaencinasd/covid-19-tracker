import "./tracker.css"
import GlobalTracker from "../molecules/Globaltracker";
import Card_top10 from "../atoms/card_top10/Card_top10";



export default function Tracker() {
  return (
    <div className="globalTrackerContainer">
        <GlobalTracker />
        
        <Card_top10 type="active" tittle_top10="Top Active"/>
    </div>
  )
}
