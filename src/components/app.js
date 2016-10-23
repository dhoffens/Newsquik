import React, { Component } from 'react';
import ArticlesIndex from './test_component';


import NavBar from './NavBar';
import SearchBar from './SearchBar';
import VideoContainer from './VideoContainer';
import Article from './Article';


export default class App extends Component {

  // componentWillMount()

  // componentWillReceiveProps()
  // shouldComponentUpdate()
  // componentWillUpdate()
  // componentDidUpdate()



  // videoSearch(term) {
  //   this.setState({
  //     // videos: this.props.videos,
  //     // MainVideo: this.props.videos[0]
  //   });
  // }


  render() {
    // const videoSearch = _.debounce((term)=> { this.videoSearch(term) }, 300);
    return (
      <div>
        <NavBar />
        <SearchBar />
        {/* <VideosIndex /> */}
        <VideoContainer />
        <ArticlesIndex />
        <Article />
      </div>
    );
  }
}
