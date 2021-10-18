//react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//css
import './index.css';
import './reset.css';

//redux
import { Provider } from 'react-redux';
import store from './store';

//router
import { BrowserRouter as Router } from 'react-router-dom';

//alerts
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './containers/alerts/Alerts';

//components
import App from './App';

//Alert Options:
const alertOptions = {
	timeout: 3000,
	position: 'top center',
};

class Index extends Component {
	render() {
		return (
			<React.StrictMode>
				<Provider store={store}>
					<AlertProvider template={AlertTemplate} {...alertOptions}>
						<Router>
							<Alerts />
							<App />
						</Router>
					</AlertProvider>
				</Provider>
			</React.StrictMode>
		);
	}
}

ReactDOM.render(<Index />, document.getElementById('root'));
