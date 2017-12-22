import React from 'react';

const VideoListItem = ({video}) => {
  // 아래의 문장으로 대치할수 있음
  // const video = props.video; 
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video_list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>  
    </li>
  );
}

export default VideoListItem;