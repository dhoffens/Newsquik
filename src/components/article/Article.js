import React, { Component } from 'react';

import ArticleTitle from './articleTitle';
import ArticleBody from './articleBody';

export default class Article extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: false
    }
  }

  handleClick(){
    this.setState({ active: !this.state.active });
  }

  render() {
    if(!this.props.data){
      return(
        <div>Loading...</div>
      )
    }

    const articles = this.props.data.docs.map(article => {
        return  (
          <li onClick={this.handleClick.bind(this)} className="list-group-item list-article" key={article.id} >
            <ArticleTitle 
              title={article.source.enriched.url.title} 
            />
            { this.state.active ?

              <ArticleBody
              text={article.source.enriched.url.text}
              url={article.source.enriched.url.url}
              />
              : null }
          </li> 
        )
      });
    return (
        <ul className="list-group">
          {articles}
        </ul>
    );
  }
}
