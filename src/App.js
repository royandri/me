import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';


// css
import './assets/css/animate.css';
import './assets/css/icomoon.css';
import './assets/css/bootstrap.css';
import './assets/css/flexslider.css';
// import './assets/fonts/flaticon/font/flaticon.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/style.css';


import Home from './views/Home';


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


class App extends Component {
	render() {
		return (
			<HashRouter>
				<Suspense fallback={loading()}>
					<Switch>
						<Route path="/" name="Home" render={props => <Home {...props} />} />
						{/* <Route path="/" component={Home} /> */}
					</Switch>
				</Suspense>
			</HashRouter>
		);
	}
}

export default App;
