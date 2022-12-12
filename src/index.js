import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { store } from './store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Auth0Provider
				domain="ajeet-jha.us.auth0.com"
				clientId="mRVa6gkGmdKAOxLHKaWsfHCfmG1DC4nm"
				redirectUri={window.location.origin}
			>
				<App />
			</Auth0Provider>
		</Provider>
	</React.StrictMode>
);
