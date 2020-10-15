import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../API/youtube';
import Videolist from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videolist: [], videoSelected: null };

    componentDidMount(){
        this.onSearchSubmit('home');
    }

    onVideoSelect = (video) => {
        this.setState({ videoSelected: video });
        console.log(video);
    }

    onSearchSubmit = async (term) => {
        const res = await Youtube.get("/search", {
            params: { q: term },
        });
        this.setState({
            videolist: res.data.items,
            videoSelected: res.data.items[0]
        });
    }
    render() {
        return <div className="ui container">
            <SearchBar onSubmit={this.onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.videoSelected} />
                    </div>
                    <div className="five wide column">
                        <Videolist videos={this.state.videolist} onVideoSelect={this.onVideoSelect} />
                    </div>
                </div>
            </div>

        </div>
    }
}

export default App;