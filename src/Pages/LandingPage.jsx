<<<<<<< HEAD
import Footer from "../components/templates/footer/Footer";
import Navbar from "../components/organisms/Navbar";
import Symptom from "../components/templates/block2_symptom/Symptom";
import Block6_wash from "../components/templates/Block6_wash/Block6_wash";



export default function LandingPage() {
  return (
    <div>
  
        <Navbar/>
        <Symptom />
        {<Block6_wash />}
        <Footer />
=======
//import Footer from "../components/templates/footer/Footer";
import Bloque1 from "../components/templates/bloque1/Bloque1";
export default function LandingPage() {
  return (
    <div>
        <Bloque1/>
        
        {/* <Footer /> */}
>>>>>>> features/navbar
    </div>
  )
}
