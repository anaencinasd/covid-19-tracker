import Tracker from "../components/organisms/Tracker"
import Navbar_tracker from "../components/molecules/navbar_tracker/Navbar_tracker"
import Top10CasesMolecule from "../components/molecules/top10CasesMolecule/Top10CasesMolecule"

export default function CountryTopTen() {
  return (
    <>
      <div className="tracker_container_principal">
        <Navbar_tracker/>
        <Tracker/>
        <Top10CasesMolecule/>
      </div>
    </>
  )
}
