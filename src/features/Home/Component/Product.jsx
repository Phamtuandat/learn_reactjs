import { Box, Button, CardMedia, makeStyles } from '@material-ui/core'
import { THUMBNAIL_PLACEHOLDER } from 'Contant'
import { addToCart } from 'features/Cart/CartSlice'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 80,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	media: {
		height: 350,
		width: 260,
		margin: 0,
		[theme.breakpoints.down('sm')]: {
			height: 250,
			width: 160,
		},
	},
	contentBox: {
		paddingTop: 20,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	saleBox: {
		marginTop: 6,
	},
	originalPrice: {
		fontSize: '12px',
		textDecoration: 'line-through',
		marginRight: 10,
	},
	salePrice: {
		color: 'red',
		fontWeight: 'bold',
	},
	addToCart: {
		backgroundColor: 'black',
		width: 150,
		fontSize: '11px',
		color: 'white',
		borderRadius: 0,
		marginTop: 10,
	},
}))
function Product({ product = {} }) {
	const thumbnail = THUMBNAIL_PLACEHOLDER(1)
	const classes = useStyles()

	const dispatch = useDispatch()

	return (
		<Box className={classes.root}>
			<CardMedia image={thumbnail} className={classes.media} title="Contemplative Reptile" />
			<Box className={classes.contentBox}>
				<Box component="span" className={classes.name}>
					{product.name}
				</Box>
				<Box className={classes.saleBox}>
					<Box component="span" className={classes.originalPrice}>
						{new Intl.NumberFormat({ style: 'currency', currency: 'VND' }).format(
							product.originalPrice
						)}
						đ
					</Box>
					<Box component="span" className={classes.salePrice}>
						{new Intl.NumberFormat({ style: 'currency', currency: 'VND' }).format(
							product.salePrice
						)}
						đ
					</Box>
				</Box>
			</Box>
			<Button
				variant="contained"
				size="small"
				className={classes.addToCart}
				onClick={() =>
					dispatch(
						addToCart({
							id: product.id,
							product,
							quantity: 1,
						})
					)
				}
			>
				+ Thêm vào giỏ hàng
			</Button>
		</Box>
	)
}

Product.propTypes = {
	product: PropTypes.object,
}

export default Product
