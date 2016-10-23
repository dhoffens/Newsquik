import React, { Component } from 'react';

// import ArticleTitle from './article/articleTitle'
// import ArticleBody from './article/articleBody'

export default class Article extends Component {
  render() {
    console.log(this.props.data);
    if(!this.props.data){
      return(
        <div>Loading...</div>
      )
    }

    const articles = this.props.data.docs.map(article => {
        return  (
          <li key={article.id} >
            <div>
              <h3>{article.source.enriched.url.title}</h3>
              <p>{article.source.enriched.url.text}</p>
              <a href={article.source.enriched.url.url}>Full Article</a>
            </div>
          </li> 
        )
      });

    console.log('articles', this.props.data);
    // console.log(articles);  


    return (
      <ul >
        {articles}
      </ul>
    );
  }
}
