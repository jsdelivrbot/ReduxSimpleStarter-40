import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = '';

class App extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
            videos:[],
            selectedVideo : null
         };
         this.videoSearch('board');  
    }

    videoSearch(term) {
        // api 모든 곳에서 사용하기 위해서 제일 최상위 컴포넌트인  APP에서 호출 (하위로 내려줌.)
        YTSearch({key: API_KEY, term:term}, (videos) => {
            // this.setState({ videos : videos});
            this.setState({ 
                videos,
                selectedVideo : videos[0]
              }); // ES6 에서는 위의 문장을 아래와같이 축약해서 사용함. 
        });
    }
    
    render(){
        const videoSearch = _.debounce(term => this.videoSearch(term), 300);
        return (
            <div>
                <SearchBar onChangeVideoSearch={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onSelectedVideo={(selectedVideo) => this.setState({selectedVideo}) } 
                           videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));