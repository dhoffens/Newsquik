import React, { Component } from 'react';
import ArticlesIndex from './test_component';
import VideosIndex from './video_container';

export default class App extends Component {
  render() {
    return (
      <div>
        <ArticlesIndex />
        <VideosIndex />
      </div>
    );
  }
}
