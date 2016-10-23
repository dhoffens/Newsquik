import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions/index';
import { bindActionCreators } from 'redux';

class VideoIndex extends Component {
  componentWillMount(){
    console.log('componentWillMount');
    this.props.fetchVideos('trump');
  }

  render() {   
    console.log(this.props.all);
    return (
      <div>
        videos
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchVideos }, dispatch);
}

//shortcut for mapDispatchToProps below
//and use es6 syntax
export default connect(null, mapDispatchToProps)(VideoIndex);