import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'
import configureStore from './store/configureStore'
import {loadMarvelComics} from "./actions/comicActions"

const store = configureStore();
store.dispatch(loadMarvelComics());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppContainer>
					<App />
			</AppContainer>
		</BrowserRouter>
	</Provider>,
  document.getElementById('app')
);

// Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./app', () => {
//     const NextApp = require('./app').default;
//     ReactDOM.render(
//       <AppContainer>
//         <NextApp/>
//       </AppContainer>,
//       document.getElementById('app')
//     );
//   });
// }
