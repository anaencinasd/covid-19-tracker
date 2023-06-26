import "./tracker.css"
import Card_top10countries from "../atoms/card_top10countries/Card_top10countries";
import GlobalTracker from "../molecules/Globaltracker";



export default function Tracker() {
  return (
    <div className="globalTrackerContainer">
        <GlobalTracker />
        <Card_top10countries />
    </div>
  )
}
