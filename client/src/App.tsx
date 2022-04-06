import React from 'react';
import './App.scss';
import './common.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from './components/views/NavBar/NavBar'
let LandingPage = React.lazy(() => { return import('./components/views/LandingPage/LandingPage') });
let NotFound = React.lazy(() => { return import('./components/views/NotFound/NotFound') });

function App():JSX.Element {
	return (
		<div className="App">
			<Router>
				<NavBar />
					<Routes>
						<Route 
							path="/" 
							element={ 
								<React.Suspense fallback={ <div className="fallback-message">Loading...</div> }>
									<LandingPage /> 
								</React.Suspense>
							}
						/>
						<Route 
							path="*"
							element={ 
								<React.Suspense fallback={ <div className="fallback-message">Loading...</div> }>
									<NotFound />
								</React.Suspense>
							}
						/>
					</Routes>
			</Router>
		</div>
	);
}

export default App;
