import React from 'react';
import './App.scss';
import './common.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from './components/views/NavBar/NavBar'
import LandingPage from './components/views/LandingPage/LandingPage';
import NotFound from './components/views/NotFound/NotFound';

function App():JSX.Element {
	return (
		<div className="App">
			<Router>
				<NavBar />
					<Routes>
						<Route path="/" element={ <LandingPage /> } />
						<Route path="*" element={ <NotFound /> } />
					</Routes>
			</Router>
		</div>
	);
}

export default App;
