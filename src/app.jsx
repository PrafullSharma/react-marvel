import React from 'react';
import Routes from './routes'
import Navigation from './components/Navigation';
import 'bootstrap/scss/bootstrap.scss';
import 'styles/index.scss';

class App extends React.Component {
	render () {
		return (
			<div>
				<Navigation/>
				<div className="container">
					<Routes />
				</div>
			</div>
		);
	}
}

export default App;
