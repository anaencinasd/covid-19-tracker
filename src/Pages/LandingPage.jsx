import Footer from "../components/templates/footer/Footer";
import Symptom from "../components/templates/block2_symptom/Symptom";
import Prevent from "../components/templates/block3_prevent/prevent";
import Block6_wash from "../components/templates/Block6_wash/Block6_wash";
import Bloque1 from "../components/templates/bloque1/Bloque1"
import Bloque_3_Spreads from "../components/templates/block3_Spreads/Bloque_3_Spreads"
import CovidNews from "../components/functions/CovidNews";



export default function LandingPage() {
  return (
    <div>
      <Bloque1 />
      <Symptom />
      <Prevent />
      <Bloque_3_Spreads />
      <Block6_wash />
      <Footer />

      <CovidNews /> 
    </div>
  )
}
