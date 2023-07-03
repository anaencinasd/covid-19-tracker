import Tracker from "../components/organisms/Tracker"
import Navbar_tracker from "../components/molecules/navbar_tracker/Navbar_tracker"
import Dropdown from "../components/atoms/dropdown/Dropdown"
import CardMoleculeGlobalTracker from "../components/molecules/cardMoleculeGlobalTracker/CardMoleculeGlobalTracker"


export default function CountryInfo() {
  return (
    <>
      <div className="tracker_container_principal">
        <Navbar_tracker/>
        <Tracker/>
        <div className="dropdownCards">
          <Dropdown /> 
          <CardMoleculeGlobalTracker/>
        </div>
      </div>
    </>
  )
}
