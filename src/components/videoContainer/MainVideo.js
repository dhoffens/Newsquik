import React, { Component } from 'react';

export default class MainVideo extends Component {
  render() {
    const mainVideo = this.props.main.items;

    if (!mainVideo){
      return <div>Loading...</div>
    }
    const theVideo = mainVideo[0];
    const videoId = theVideo.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`;
    
    return (
        <div className="video-detail col-md-8">

          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url} />
          </div>

          <div className="details">
            <div>{theVideo.snippet.title}</div>
          </div>
        </div>
      )
    }
}
