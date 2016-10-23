import React, { Component } from 'react';

import MainVideo from './videoContainer/MainVideo';
import VideoList from './videoContainer/VideoList';
import RelatedVideo from './videoContainer/RelatedVideo';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import _ from 'lodash';


class VideoContainer extends Component {


  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     mainVideo: null,
  //     videos: []
  //   };

  // }

  // updateVideos(){
  //   this.setState({
  //     videos: this.props.videos,
  //     mainVideo: this.props.videos
  //   })
  // }





  render() {
    return (
      <div>
        <MainVideo main={this.props.videos} />
        <RelatedVideo videos={this.props.videos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {videos: state.videos.all};
}

export default connect(mapStateToProps)(VideoContainer);
