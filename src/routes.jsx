import React from 'react';
import { Switch, Route } from "react-router-dom";
import ComicPage from './components/marvel/ComicPage';
import HomePage from "./components/home/homePage";
import About from './components/About';
import Sample from './components/Sample';
import 'styles/index.scss';

class Routes extends React.Component {
	render () {
		return (
			<Switch>
				<Route exact path="/" component={HomePage}/>
				<Route path="/about" component={About}/>
				<Route path="/sample" component={Sample}/>
				<Route path="/comiclist" component={ComicPage}/>
			</Switch>
		);
	}
}

export default Routes;
