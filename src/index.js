import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from '../src/components/search_bar';
import VideoList from '../src/components/video_list';
const API_KEY = 'AIzaSyB-gT2awfMZbdROCAKCvLlWQADhl1bOxSw';

// Create a new component. This component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});
	}

	// render function because its class based component
	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// Take this component's generate HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('#myContainerDiv'));