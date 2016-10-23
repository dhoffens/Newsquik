import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainVideo from './videoList/MainVideo'
import RelatedVideo from './videoList/RelatedVideo'


class VideoList extends Component {



  render() {
    return (
      <div>
        <MainVideo />
        <RelatedVideo />
      </div>
    );
  }
}

function mapStateToProps({ videos }) {
  return {videos};
}

export default connect(mapStateToProps)(VideoList);
