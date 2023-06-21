import Footer from "../components/templates/footer/Footer";
import Navbar from "../components/organisms/Navbar";
import Symptom from "../components/templates/block2_symptom/Symptom";
import Prevent from "../components/templates/block3_prevent/prevent";
import Block6_wash from "../components/templates/Block6_wash/Block6_wash";
import cardSymptom from "../components/atoms/cardSymptom/CardSymptom";



export default function LandingPage() {
  return (
    <div>
    <Symptom/>
    <Prevent/>


      {/*<Navbar/>

      <Footer />*/}
    </div>
  )
}
