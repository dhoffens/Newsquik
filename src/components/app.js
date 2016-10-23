import React, { Component } from 'react';
import ArticlesIndex from './test_component';

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import Article from './Article';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar/>
        {/* <VideosIndex /> */}
        <VideoList />
        <ArticlesIndex />
        <Article />
      </div>
    );
  }
}
