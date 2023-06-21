import Footer from "../components/templates/footer/Footer";
import Navbar from "../components/organisms/Navbar";
import Symptom from "../components/templates/block2_symptom/Symptom";
import Block6_wash from "../components/templates/Block6_wash/Block6_wash";
import Spreads from "../components/templates/block3_Spreads/Bloque_3_Spreads";


export default function LandingPage() {
  return (
    <div>
  
        <Navbar/>
        <Symptom />
        <Spreads/>
        {<Block6_wash />}
        <Footer />
    </div>
  )
}
