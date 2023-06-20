import "../../templates/footer/footer.css";
import PropTypes from 'prop-types';

export default function FooterColumn(props) {
  return (
    <div className="footerColumns">
      <h5 className="titleFooter">{props.title}</h5>
      <ul>{props.children}</ul>
    </div>
  );
}

FooterColumn.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  }
