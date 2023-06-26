import Footer from "../components/templates/footer/Footer";
import Symptom from "../components/templates/block2_symptom/Symptom";
import Prevent from "../components/templates/block3_prevent/prevent";
import Block6_wash from "../components/templates/Block6_wash/Block6_wash";
import Bloque1 from "../components/templates/bloque1/Bloque1";
import Bloque_3_Spreads from "../components/templates/block3_Spreads/Bloque_3_Spreads";
import Questions from "../components/templates/block5_questions/Questions";
import Block7_getApp from "../components/templates/block7_getApp/Block7_getApp";
import News from "../components/templates/block8_news/News";



export default function LandingPage() {
return (
    <div>
        <Bloque1 />
        <Symptom />
        <Prevent />
        <Bloque_3_Spreads />
        <Questions/>
        <Block6_wash />
        <Block7_getApp/>
        <News />
        <Footer /> 
    </div>
)
}
