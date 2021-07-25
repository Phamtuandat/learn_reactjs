import React from 'react'
// import PropTypes from 'prop-types'
import { Container, Grid, Paper } from '@material-ui/core'
import Thumbnail from '../Component/Thumbnail'
import { useRouteMatch } from 'react-router-dom'
import ProductIdHook from 'Hook/ProductHook'
import ContentProduct from '../Component/ContentProduct'

function ProductDetail(props) {
	const { params } = useRouteMatch()

	const { product, isLoading } = ProductIdHook(params.productId)
	console.log(product, isLoading)
	return (
		<Container>
			<Paper elevation={0}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={4} sm={8} lg={4}>
						<Thumbnail product={product} isLoading={isLoading} />
					</Grid>
					<Grid item xs={12} md={8} sm={12} lg={8}>
						<ContentProduct product={product} isLoading={isLoading} />
					</Grid>
				</Grid>
			</Paper>
		</Container>
	)
}

// ProductDetail.propTypes = {

// }

export default ProductDetail
