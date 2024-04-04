import React from 'react'
import Header from './custom_components/Header'
import News_list from './custom_components/News_list'
import Footer from './custom_components/Footer'


function News_tab() {
  return (
    <>
        <Header news={true}/>
        <span className="section-heading">
            <h2> Trending Today </h2>
        </span>  
        <News_list/>
        <Footer/>
    </>
  )
}

export default News_tab
