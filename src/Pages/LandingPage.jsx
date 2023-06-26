import Block1 from "../components/templates/block1/Block1";
import Symptom from "../components/templates/block2_symptom/Symptom";
import Prevent from "../components/templates/block3_prevent/prevent";
import Spreads from "../components/templates/block4_Spreads/Spreads";
import Questions from "../components/templates/block5_questions/Questions";
import Wash from "../components/templates/Block6_wash/Wash";
import GetApp from "../components/templates/block7_getApp/GetApp";
import News from "../components/templates/block8_news/News";
import Footer from "../components/templates/footer/Footer";



export default function LandingPage() {
return (
    <div>
      <Block1/>
      <Symptom/>
      <Prevent/>
      <Spreads/>
      <Questions/>
      <Wash/>
      <GetApp/>
      <News/>
      <Footer />

    </div>
)
}
