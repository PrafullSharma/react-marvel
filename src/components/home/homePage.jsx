import React from "react";
import { NavLink } from "react-router-dom";

class HomePage extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1>It Works!</h1>
					<p>This React project just works including <span className="redBg">module</span> local styles.</p>
					<p>Enjoy!</p>
				</div>
			</div>
		);
	}
}

export default HomePage;
