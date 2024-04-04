import React from 'react'
import '../css/App.css'
import { Link } from 'react-router-dom'


function Header(props) {
//   if (props.home === true){
//     const home = document.getElementById("tab1")
//     home.classList.add('active')
// }
// else if (props.news === true){
//     const news = document.getElementById("tab2")
//     news.classList.add('active')
// }
// else if (props.hots === true){
//     const hots = document.getElementById("tab3")
//     hots.classList.add('active')
// }
// else if (props.contact === true){
//     const contact = document.getElementById("tab4")
//     contact.classList.add('active')
// }

  return (
    <header>
    <button className="menu-btn">
    <i className="fa-solid fa-bars fa-2xl"></i>
    </button>
    <div className="logo" id='nav-logo'>
      {/* <img src={Logo} alt="Logo" /> */}
      <b className='logo-text'>Anonymous</b>
    </div>
    <nav>
      <ul>
      <Link id='tab1' className={props.home===true?"Tabs active":"Tabs"} to={props.tab_links[0]}>{props.tabs[0]}</Link>
        <Link id='tab2' className={props.news===true?"Tabs active":"Tabs"} to={props.tab_links[1]} >{props.tabs[1]}</Link>
        <Link id='tab3' className={props.hots===true?"Tabs active":"Tabs"} to={props.tab_links[2]} >{props.tabs[2]}</Link>
        <Link id='tab4' className={props.contact===true?"Tabs active":"Tabs"} to={props.tab_links[3]} >{props.tabs[3]}</Link>
      </ul>
    </nav>
    <div className='nav-sidebar d-flex' role='search'>
      <form className="search-bar" id='search-bar-container'>
        <i className="fa fa-search search-icon" aria-hidden="true"></i>
        <input type="search" className='search-bar form-control me-2' id='search-bar-nav' placeholder="Search" aria-label="Search" />
      </form>


    <div className="register-buttons" id='nav-login-btn' >
      <Link to={props.btn_links[0]}>
      {props.btn[0]===null?" ":<button className={props.btn_classes[0]} id='sign-in-nav'>{props.btn[0]}</button>}
      </Link>
      <Link to={props.btn_links[1]}>
      {props.btn[1]===null?" ":<button className={props.btn_classes[1]} id='sign-up-nav'>{props.btn[1]}</button>}
      </Link>

    </div>
    </div>
    </header>
  )
}

Header.defaultProps = {
  tabs: ['Home','NEWS', 'Hot Picks', 'Contact Us'],
  tab_links: ['/', '/all-news', '/hots', '/contact'],
  btn: ['Sign in', 'Sign up'],
  btn_links: ['/sign-in', '/sign-up'],
  btn_classes: ['signin-btn', 'signup-btn']
}

export default Header;
