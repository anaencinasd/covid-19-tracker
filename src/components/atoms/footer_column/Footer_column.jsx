import "./footer_column.css";
import PropTypes from 'prop-types';

export default function FooterColumn(props) {
  return <div className="footer-column">
    <h5>{props.title}</h5>
    <ul>{props.children}</ul>
    
  </div>;
}

FooterColumn.propTypes = {
    title: PropTypes.string,
    children: PropTypes.string,
  }
