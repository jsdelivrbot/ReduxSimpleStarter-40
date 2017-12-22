import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyAi7Y9oFLX-j2o-ArPiHhxF9mMioqaUOww';

class App extends Component {  
    constructor(props) {
        super(props);
        this.state = { videos:[] };

        // api 모든 곳에서 사용하기 위해서 제일 최상위 컴포넌트인  APP에서 호출 (하위로 내려줌.)
        YTSearch({key: API_KEY, term:'board'}, (videos) => {
            // this.setState({ videos : videos});
            this.setState({ videos }); // ES6 에서는 위의 문장을 아래와같이 축약해서 사용함. 
        });
    }
    
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));