import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './app/store'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<SnackbarProvider
				maxSnack={3}
				autoHideDuration={3000}
				anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			>
				<App />
			</SnackbarProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
