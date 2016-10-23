import React, { Component } from 'react';
import ArticlesIndex from './test_component';

import SearchBar from './SearchBar';
import VideoContainer from './VideoContainer';
import ArticlesContainer from './ArticlesContainer';


export default class App extends Component {

  render() {
    // const videoSearch = _.debounce((term)=> { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar />
        
        <div className='wrapper'>
          <VideoContainer />
          <ArticlesContainer />
        </div>
      </div>
    );
  }
}
