import Footer from "../components/templates/footer/Footer";
import Symptom from "../components/templates/block2_symptom/Symptom";
import Block6_wash from "../components/templates/Block6_wash/Block6_wash";
import Spreads from "../components/templates/block3_Spreads/Bloque_3_Spreads";
import Bloque1 from "../components/templates/bloque1/Bloque1";


export default function LandingPage() {
  return (
    <div>
        <Bloque1/>
        <Symptom />
        <Spreads/>
        {<Block6_wash />}
        <Footer />
    </div>
  )
}
