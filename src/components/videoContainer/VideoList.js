import React from 'react';
import RelatedVideo from "./RelatedVideo";

const VideoList = (props) => {
  if(!props){
    return (
      <div>Loading...</div>
    )
  }

  console.log('props', props);

  const videoItems = props.videos.map(video => {
    return (
        <RelatedVideo 
          onVideoSelect={props.onVideoSelect}
          key={video.etag} 
          video={video} 
        />
      ) 
  });

  return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    )
}

export default VideoList;