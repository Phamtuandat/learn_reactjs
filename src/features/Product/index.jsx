import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ListPage from './page/ListPage'
import { Box } from '@material-ui/core'
import ProductDetail from './page/ProductDetail'

function ProductFeatures(props) {
	const math = useRouteMatch()
	return (
		<Box mt={2}>
			<Switch>
				<Route path={math.url} exact component={ListPage} />
				<Route path={`${math.url}/:productId`} component={ProductDetail} />
			</Switch>
		</Box>
	)
}

export default ProductFeatures
