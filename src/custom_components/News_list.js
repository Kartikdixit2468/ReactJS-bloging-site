import React from 'react';
import News from './News';

function News_list(props) {

    // let news_list = props.news_list[]

  return (
      <>
      {props.news_list.map((news_) => {
                        return <News title={news_['title']} desc={news_['desc']} slug={news_['slug']}/>
                    })}

      </>
    )
}


News_list.defaultProps = {
  list_length: 6,
  news_list: [
     {'title': "Hello, This is Anant1 Pareek & How are you ?",
     'desc': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum repudiandae repellat aut ea labore consequuntur pariatur atque doloremque voluptatem ad. Eius adipisci quis hic, accusantium corrupti ducimus sed excepturi eum voluptatum dolorem repellat nulla impedit commodi fuga necessitatibus iure odit ",
    'slug' : "p1"},

    {'title': "Hello, This is Anant2 Pareek & How are you ?",
     'desc': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum repudiandae repellat aut ea labore consequuntur pariatur atque doloremque voluptatem ad. Eius adipisci quis hic, accusantium corrupti ducimus sed excepturi eum voluptatum dolorem repellat nulla impedit commodi fuga necessitatibus iure odit ",
     'slug' : "p2"},

    {'title': "Hello, This is Anant3 Pareek & How are you ?",
     'desc': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum repudiandae repellat aut ea labore consequuntur pariatur atque doloremque voluptatem ad. Eius adipisci quis hic, accusantium corrupti ducimus sed excepturi eum voluptatum dolorem repellat nulla impedit commodi fuga necessitatibus iure odit ",
     'slug' : "p3"},
    
    {'title': "Hello, This is Anant4 Pareek & How are you ?",
     'desc': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum repudiandae repellat aut ea labore consequuntur pariatur atque doloremque voluptatem ad. Eius adipisci quis hic, accusantium corrupti ducimus sed excepturi eum voluptatum dolorem repellat nulla impedit commodi fuga necessitatibus iure odit ",
     'slug' : "p4"},

    {'title': "Hello, This is Anant5 Pareek & How are you ?",
     'desc': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum repudiandae repellat aut ea labore consequuntur pariatur atque doloremque voluptatem ad. Eius adipisci quis hic, accusantium corrupti ducimus sed excepturi eum voluptatum dolorem repellat nulla impedit commodi fuga necessitatibus iure odit ",
     'slug' : "p5"},

    {'title':  "Hello, This is Anant6 Pareek & How are you ?",
     'desc': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum repudiandae repellat aut ea labore consequuntur pariatur atque doloremque voluptatem ad. Eius adipisci quis hic, accusantium corrupti ducimus sed excepturi eum voluptatum dolorem repellat nulla impedit commodi fuga necessitatibus iure odit ",
     'slug' : "p6"}
  ]
}


export default News_list
