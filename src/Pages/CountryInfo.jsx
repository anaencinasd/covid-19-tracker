import Tracker from "../components/organisms/Tracker"
import Navbar_tracker from "../components/molecules/navbar_tracker/Navbar_tracker"
import CardMoleculeTotalTracker from "../components/molecules/cardMoleculeTotalTracker/CardMoleculeTotalTracker"
import Dropdown from "../components/atoms/dropdown/Dropdown"


export default function CountryInfo() {
  return (
    <>
      <div className="tracker_container_principal">
        <Navbar_tracker/>
        <Tracker/>
        <CardMoleculeTotalTracker/>
        <div className="dropdown&Cards">
          <Dropdown />
        </div>
      </div>
    </>
  )
}
