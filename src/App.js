import NavBar from 'components/Navbar/Navbar'
import Counter from 'features/counter/page/Index'
import NotFound from 'features/NotFound/index'
import Home from 'features/Home/Component/Home'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import ListPage from './features/todos/page/listPages'

function App() {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/todos" component={ListPage} />
				<Route path="/counter" component={Counter} />
				<Route path="" component={NotFound} />
			</Switch>
		</div>
	)
}

export default App
