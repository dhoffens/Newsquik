import React, { Component } from 'react';

import MainVideo from './videoContainer/MainVideo'
import VideoList from './videoContainer/VideoList'
import RelatedVideo from './videoContainer/RelatedVideo'
import { connect } from 'react-redux';
import _ from 'lodash';


class VideoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      MainVideo: null,
      // videos: this.props.videos,
      // MainVideo: this.props.videos[0]
    };

    // this.videoSearch();
  }
  // updateVideos() {
  //   this.setState({
  //     videos: this.props.videos,
  //     mainVideo: this.props.videos[0]
  //   });
  //   console.log('plop');
  // }

  render() {
    console.log('test1', this.props.videos);
    return (
      <div>
        <MainVideo />
        <RelatedVideo />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {videos: state.videos.all};
}

export default connect(mapStateToProps)(VideoContainer);
