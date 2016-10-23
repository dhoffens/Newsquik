import React, { Component } from 'react';
import ArticlesIndex from './test_component';
import VideosIndex from './video_container';

import NavBar from './NavBar';
import Video from './Video';
import Article from './Article';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <VideosIndex />
        <Video />
        <ArticlesIndex />
        <Article />
      </div>
    );
  }
}
