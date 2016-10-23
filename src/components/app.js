import React, { Component } from 'react';
import ArticlesIndex from './test_component';

import NavBar from './NavBar';
import Video from './Video';
import Article from './Article';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ArticlesIndex />
        <Video />
        <Article />
      </div>
    );
  }
}
