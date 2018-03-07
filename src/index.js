import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from '../src/components/search_bar';
import VideoList from '../src/components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = 'AIzaSyB-gT2awfMZbdROCAKCvLlWQADhl1bOxSw';

// Create a new component. This component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [], 
			selectedVideo: null
		 };

		 this.videoSearch('hot wheels');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
			selectedVideo: videos[0]
			 });
		});
	}

	// render function because its class based component
	render() {
		const videoSearch =_.debounce((term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

// Take this component's generate HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('#myContainerDiv'));