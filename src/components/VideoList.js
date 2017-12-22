import React from 'react';
import VideoListItem from './VideoListItem';

// 함수형컴포넌트에서는 props를 인자로 받아서 사용한다.
// 클래스컴포넌트에서는 this.props 형태로 사용함.
const VideoList = (props) => {
  // map의 결과같으로 [<VideoListItem video={video} />, <VideoListItem video={video} />,..] 반환됨.
  // map도 iterator라고 함. 
  const videoItems = props.videos.map((video) => {
    // key 값을 안넣으면 에러가 남
    // key를 받아서 그것만 렌더링할수 있게 하기위해 무조건 key를 넘겨줘야함. 
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>  
  );
}
export default VideoList;