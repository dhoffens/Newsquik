import React, { Component } from 'react';

import ArticleTitle from './articleTitle';
import ArticleBody from './articleBody';

export default class Article extends Component {
  render() {
    if(!this.props.data){
      return(
        <div>Loading...</div>
      )
    }

    const articles = this.props.data.docs.map(article => {
        return  (
          <li key={article.id} >
            <ArticleTitle 
              title={article.source.enriched.url.title} 
            />
            <ArticleBody
              text={article.source.enriched.url.text}
              url={article.source.enriched.url.url}
              />
          </li> 
        )
      });
    return (
      <ul >
        {articles}
      </ul>
    );
  }
}
