import Footer from "../components/templates/footer/Footer";
import TittleBlock from "../components/atoms/tittleBlock/TittleBlock";
import CardAtom from "../components/atoms/symptomCard/CardAtom";
import img1 from "../assets/images/banner-right.png"
export default function LandingPage() {
  return (
    <div>
        <TittleBlock text_block={'symtom'} content_block= {'Basic Symptom Against Corona virus'} />
        <CardAtom img_card={img1} tittle_content={'Aches and points'} text_content= {'Fever is a key symptom, expert say. Dont fixate a number , but know its really not a fever until your temperature reaches al least 100'} ></CardAtom>
        <Footer />
    </div>
  )
}
