import React from "react";
import "../css/App.css";
import logo from '../img/book-logo-trans.png'
import { Link } from "react-router-dom";

function News(props) {
  let link = `127.0.0.1:8000/post/${props.slug}`
  return (
    <section id="news-sec">
      <div className="news">
        {/* <i className="fa-solid fa-book-open news-icon"></i> */}
        <div className="img-and-shadow">
          <div className="img-glow"></div>
        <img src={logo} alt="" className="news-icon"/>
        </div>
        <div className="news-container">
          <div className="lines"></div>
          <div className="news-content">
            <Link to={link} className="news-body">
              <h2 className="news-heading">{props.title}</h2>
              <p className="news-text">{props.desc} </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
// background: linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364);

News.defaultProps = {
  title: "Hello, This is Anant Pareek & How are you ?",
  desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum repudiandae repellat aut ea labore consequuntur pariatur atque doloremque voluptatem ad. Eius adipisci quis hic, accusantium corrupti ducimus sed excepturi eum voluptatum dolorem repellat nulla impedit commodi fuga necessitatibus iure odit ",
  slug: "p1"
};

export default News;
