import React, { Component } from 'react';

import MainVideo from './videoContainer/MainVideo';
import VideoList from './videoContainer/VideoList';
import RelatedVideo from './videoContainer/RelatedVideo';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import _ from 'lodash';


class VideoContainer extends Component {
  render() {
    return (
      <div>
        <MainVideo main={this.props.videos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {videos: state.videos.all};
}

export default connect(mapStateToProps)(VideoContainer);
