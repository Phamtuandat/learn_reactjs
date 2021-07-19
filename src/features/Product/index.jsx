import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ListPage from './page/ListPage'
import { Box } from '@material-ui/core'

function ProductFeatures(props) {
	const math = useRouteMatch
	return (
		<Box pt={4}>
			<Switch>
				<Route path={math.url} component={ListPage} />
			</Switch>
		</Box>
	)
}

export default ProductFeatures
