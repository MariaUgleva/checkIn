import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Main from './components/Main';
import Login from './components/Login';
import News from './components/News';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Main} />
						<Route path="/profile" component={Profile} />
						<Route path="/login" component={Login} />
						<Route path="/news" component={News} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
