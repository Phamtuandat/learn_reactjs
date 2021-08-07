import { Box } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from 'common/theme'
import Footer from 'components/Footer'
import NavBar from 'components/Navbar/Navbar'
import CartFeatures from 'features/Cart'
import Header from 'features/Header'
import HomePage from 'features/Home/Index'
import NotFound from 'features/NotFound/index'
import ProductFeatures from 'features/Product/index'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<Header />
			<Box>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/products" component={ProductFeatures} />
					<Route path="/cart" component={CartFeatures} />
					<Route path="" component={NotFound} />
				</Switch>
			</Box>
			<Footer />
		</ThemeProvider>
	)
}

export default App
