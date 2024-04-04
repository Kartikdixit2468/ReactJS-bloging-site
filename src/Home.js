import React from 'react'
import Header from './custom_components/Header'
import Footer from './custom_components/Footer'
import News_list from './custom_components/News_list'
function Home() {
  return (
    <>
      <Header home={true}/>
      <section className='news-section'>
      <span className="section-heading">
        <h2>Most Recent</h2>
      </span>  
      <News_list/>
      </section>
      <Footer/>
    </>
  )
}

export default Home;
