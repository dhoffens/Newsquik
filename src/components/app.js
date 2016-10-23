import React, { Component } from 'react';
import ArticlesIndex from './test_component';


import NavBar from './NavBar';
import SearchBar from './SearchBar';
import VideoContainer from './VideoContainer';
import ArticlesContainer from './ArticlesContainer';


export default class App extends Component {

  render() {
    // const videoSearch = _.debounce((term)=> { this.videoSearch(term) }, 300);
    return (
      <div>
        <NavBar />
        <SearchBar />
        <VideoContainer />
        <ArticlesContainer />
      </div>
    );
  }
}
