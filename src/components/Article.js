import React, { Component } from 'react';

import ArticleTitle from './article/articleTitle'
import ArticleBody from './article/articleBody'

export default class Article extends Component {
  render() {
    return (
      <div>
        <ArticleTitle />
        <ArticleBody />
      </div>
    );
  }
}
