import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ListPage from './page/ListPage'
import { Box } from '@material-ui/core'
import ProductDetail from './page/ProductDetail'
import Button from 'components/Button'

function ProductFeatures(props) {
	const math = useRouteMatch()

	const handleScrollToTop = () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}
	return (
		<Box mt={2}>
			<Switch>
				<Route path={math.url} exact component={ListPage} />
				<Route path={`${math.url}/:productId`} component={ProductDetail} />
			</Switch>
			<Button handleScrollToTop={handleScrollToTop} />
		</Box>
	)
}

export default ProductFeatures
