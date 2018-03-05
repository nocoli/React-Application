import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../src/components/search_bar';

const API_KEY = 'AIzaSyB-gT2awfMZbdROCAKCvLlWQADhl1bOxSw';

// Create a new component. This component should produce some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this component's generate HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('#myContainerDiv'));