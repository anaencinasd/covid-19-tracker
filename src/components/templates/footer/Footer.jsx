import FooterColumn from "../../atoms/footer_column/Footer_column";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footercontainer">
      <FooterColumn title="Quick Links">
        <li>Prevention</li>
        <li>Quarantine</li>
        <li>About</li>
        <li>Help</li>
      </FooterColumn>
      <FooterColumn title="About">
        <li>Hand Wash</li>
        <li>Social Distance</li>
        <li>Isolate</li>
        <li>Difference</li>
      </FooterColumn>
      <FooterColumn title="Recommendations">
        <li>Hand Wash</li>
        <li>Social Distance</li>
        <li>Isolate</li>
        <li>Difference</li>
      </FooterColumn>
    </div>
  );
}
