import React, { Component } from 'react';

import Article from './article/Article';
import ArticleTitle from './article/articleTitle'
import ArticleBody from './article/articleBody'
import { connect } from 'react-redux';

class ArticlesContainer extends Component {
  render() {
    return (
      <div >
        <Article data={this.props.articles.result} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {articles: state.articles.all};
}

export default connect(mapStateToProps)(ArticlesContainer);