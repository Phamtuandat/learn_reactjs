import { Box, Grid, IconButton, makeStyles } from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart, setQuantity } from '../CartSlice'
import CartInfo from './CartList/CartInfo'
import CartQuantity from './CartList/CartQuantity'

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
	originalPrice: {
		textDecoration: 'line-through',
		marginLeft: theme.spacing(1),
		fontSize: theme.typography.caption.fontSize,
		color: theme.palette.action.disabled,
		alignSelf: 'center',
	},
	salePrice: {
		fontSize: theme.typography.body1.fontSize,
		alignSelf: 'center',
	},
	removeBox: {
		display: 'flex',
		justifyContent: 'center',
	},
	saleBox: {
		display: 'flex',
	},
	totalPriceSales: {
		fontSize: theme.typography.body1.fontSize,
		alignSelf: 'center',
		color: 'rgb(255, 66, 78)',
	},
	removeBtn: {
		alignSelf: 'center',
	},
}))
function CartList({ cartItem = [] }) {
	const dispatch = useDispatch()
	const { product, quantity } = cartItem

	const classes = useStyles()

	const handleSetQuantity = (value) => {
		dispatch(
			setQuantity({
				id: product.id,
				quantity: +value,
			})
		)
	}
	const handleDelete = () => {
		dispatch(removeFromCart(product.id))
	}
	const totalPriceSales = new Intl.NumberFormat({ style: 'currency', currency: 'VND' }).format(
		product.salePrice * quantity
	)
	return (
		<Box component="div" className={classes.root}>
			<Grid container spacing={2}>
				<Grid item lg={5} md={4} xs={12}>
					<CartInfo product={product} quantity={quantity} />
				</Grid>
				<Grid item lg={7} md={8} xs={12}>
					<Grid container spacing={2}>
						<Grid item lg={4} md={3} xs={3} className={classes.saleBox}>
							<Box component="span" className={classes.salePrice}>
								{new Intl.NumberFormat({
									style: 'currency',
									currency: 'VND',
								}).format(product.salePrice)}
								đ
							</Box>
							<Box component="span" className={classes.originalPrice}>
								{new Intl.NumberFormat({
									style: 'currency',
									currency: 'VND',
								}).format(product.originalPrice)}
								đ
							</Box>
						</Grid>
						<Grid item lg={4} md={2} xs={3}>
							<CartQuantity quantity={quantity} onChange={handleSetQuantity} />
						</Grid>
						<Grid item lg={2} md={2} xs={3} className={classes.saleBox}>
							<Box component="span" className={classes.totalPriceSales}>
								{totalPriceSales}đ
							</Box>
						</Grid>
						<Grid item lg={2} md={1} xs={3} className={classes.removeBox}>
							<IconButton onClick={handleDelete} color="secondary" size="small">
								<DeleteOutlinedIcon className={classes.removeBtn} />
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	)
}
export default CartList
