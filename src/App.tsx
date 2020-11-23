import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
			</div>
		</BrowserRouter>
	);
}

export default App;
