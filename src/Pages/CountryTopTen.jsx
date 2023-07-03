import Tracker from "../components/organisms/Tracker"
import Navbar_tracker from "../components/molecules/navbar_tracker/Navbar_tracker"
import Top10CasesMolecule from "../components/molecules/top10CasesMolecule/Top10CasesMolecule"
import './countryTopTen.css'
export default function CountryTopTen() {
  return (
    <>
      
        <Navbar_tracker/>
        <div className="tracker_container_principal">
        <Tracker/>
        <Top10CasesMolecule/>


      </div>
    </>
  )
}
