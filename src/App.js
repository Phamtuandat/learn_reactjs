import { Box } from '@material-ui/core'
import NavBar from 'components/Navbar/Navbar'
import Home from 'features/Home/Component/Home'
import NotFound from 'features/NotFound/index'
import ProductFeatures from 'features/Product/index'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import ListPage from './features/todos/page/listPages'

function App() {
	return (
		<div>
			<NavBar />
			<Box>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/todos" component={ListPage} />
					<Route path="/products" component={ProductFeatures} />
					<Route path="" component={NotFound} />
				</Switch>
			</Box>
		</div>
	)
}

export default App
