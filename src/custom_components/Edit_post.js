import React from 'react';
import '../css/App.css'
import { Link } from 'react-router-dom';

function Edit_post(props) {
  let key = 123456789;
  // let edit_link = `/edit-${key}-${props.news_num}`;
  let del_link = `/delete-${key}-${props.news_num}`;

  return (
    <div className="edit-post">
      <h4>{props.news_title}</h4>
      <div className="edit-btn">
        <Link to='' > <button className='btn btn-outline-success edit-post-btn'> {props.btn[0]} </button> </Link>
        {/* <Link to='' > <button className='btn btn-danger edit-post-btn'> {props.btn[1]} </button> </Link> */}
        <Link to={props.btn[1]==='Delete'? del_link :props.btn_links[1]}><button className='btn btn-danger edit-post-btn'>{props.btn[1]}</button></Link>
      </div>
    </div>
    )
}

Edit_post.defaultProps = {
  news_title: "Hello this is news of limited words....",
  btn: ['Edit', 'Delete'],
  btn_links: ['', '']
};


export default Edit_post