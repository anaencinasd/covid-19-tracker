import "../../templates/footer/footer.css";
import PropTypes from 'prop-types';

export default function FooterColumn(props) {
  return <div className="footerColumn">
    <h5 style={props.style}>{props.title}</h5>
    <ul style={props.style}>{props.children}</ul>
    
  </div>;
}

FooterColumn.propTypes = {
    title: PropTypes.string,
    children: PropTypes.string,
    style: PropTypes.string,
  }
