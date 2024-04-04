import { Link } from 'react-router-dom';
import '../css/topbar.css'

function Topbar(props) {

  let topbar_text_style = {
    color: props.btn_color
  }
  return (
    <div className="top-bar">
      <div className="logo top-bar-logo">
        <b className="logo-text">Anonymous</b>
      </div>
      <div className="register-buttons" id="top-bar-register-btn">
        <b style={topbar_text_style}>{props.text}</b>
        <Link to={props.btn_link}>
        <button className={props.btn_class} >{props.btn_name}</button>
        </Link>
      </div>
      <div className="back-arrow">
        <Link to="/">
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
}

Topbar.defaultProps = {
  btn_name: "Sign-in",
  btn_class: "signin-btn",
  text: "Already have account? ",
  btn_link: "/sign-in",
  btn_color: "rgb(105, 117, 158)"
}

export default Topbar;
