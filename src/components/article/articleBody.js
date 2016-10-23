import React, { Component } from 'react';

export default class ArticleBody extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.text}
        </p>
        <a href={this.props.url}>Full Article</a>
      </div>
    );
  }
}
