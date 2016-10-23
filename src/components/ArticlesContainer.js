import React, { Component } from 'react';

import Article from './article/Article';
import { connect } from 'react-redux';

class ArticlesContainer extends Component {
  render() {
    return (
      <div className="articlesContainer">
        <Article data={this.props.articles.result} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {articles: state.articles.all};
}

export default connect(mapStateToProps)(ArticlesContainer);