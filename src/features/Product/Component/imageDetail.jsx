import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { addToCart } from 'features/Cart/CartSlice'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'
import AddToCardForm from '../Component/AddToCardForm'
import ContentProduct from './ContentProduct'
import Thumbnail from './Thumbnail'

const useStyles = makeStyles((theme) => ({
	paper: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
	},
}))
function ImageDetail({ product = {}, isOpen = false }) {
	const classes = useStyles()
	const dispatch = useDispatch()
	return (
		<div className={classes.paper}>
			<Container>
				<Paper elevation={0}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={4} sm={8} lg={5} className={classes.Thumbnail}>
							<Thumbnail product={product} />
						</Grid>
						<Grid item xs={12} md={8} sm={12} lg={7} className={classes.detailsContent}>
							<ContentProduct product={product} />
							<AddToCardForm
								onSubmit={(value) =>
									dispatch(
										addToCart({
											id: product.id,
											product,
											quantity: value.Quantity,
										})
									)
								}
							/>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</div>
	)
}

ImageDetail.propTypes = {
	product: PropTypes.object,
}

export default ImageDetail
