// import PropTypes from 'prop-types'
import { Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core'
import ProductIdHook from 'Hook/ProductHook'
import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import ContentProduct from '../Component/ContentProduct'
import AddToCardForm from '../Component/AddToCardForm'
import Thumbnail from '../Component/Thumbnail'
import ProductMenus from '../Component/ProductMenus'
import ProductDescription from '../Component/ProductDescription'
import ProductAdditional from '../Component/ProductAdditional'
import ProductReviews from '../Component/ProductReviews'

const useStyle = makeStyles((theme) => ({
	detailsContent: {
		borderLeft: '1px solid #ddd',
		padding: theme.spacing(2),
	},
	Thumbnail: {
		padding: theme.spacing(2),
	},
}))
function ProductDetail(props) {
	const { params, url } = useRouteMatch()
	const handleAddTocard = (value) => {
		console.log(value)
	}
	const classes = useStyle()
	const { product, isLoading } = ProductIdHook(params.productId)

	return (
		<>
			{isLoading ? (
				<LinearProgress />
			) : (
				<Container>
					<Paper elevation={0}>
						<Grid container spacing={2}>
							<Grid item xs={12} md={4} sm={8} lg={5} className={classes.Thumbnail}>
								<Thumbnail product={product} isLoading={isLoading} />
							</Grid>
							<Grid item xs={12} md={8} sm={12} lg={7} className={classes.detailsContent}>
								<ContentProduct product={product} isLoading={isLoading} />
								<AddToCardForm onSubmit={handleAddTocard} />
							</Grid>
						</Grid>
					</Paper>
					<ProductMenus />
					<Paper elevation={0}>
						<Switch>
							<Route path={`${url}`} exact>
								<ProductDescription product={product} />
							</Route>
							<Route path={`${url}/Additional`} component={ProductAdditional} />
							<Route path={`${url}/Reviews`} component={ProductReviews} />
						</Switch>
					</Paper>
				</Container>
			)}
		</>
	)
}

export default ProductDetail
