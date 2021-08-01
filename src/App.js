import { Box } from '@material-ui/core'
import Footer from 'components/Footer'
import NavBar from 'components/Navbar/Navbar'
import CartFeatures from 'features/Cart'
import Home from 'features/Home/Component/Home'
import NotFound from 'features/NotFound/index'
import ProductFeatures from 'features/Product/index'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from 'common/theme'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<Box>
				<Switch>
					<Route path="/" exact component={Home} />
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
