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
	removeBox: {
		display: 'flex',
		justifyContent: 'center',
	},
	totalPriceSales: {
		fontSize: theme.typography.body1.fontSize,
		alignSelf: 'center',
		color: 'rgb(255, 66, 78)',
		display: 'flex',
		justifyContent: 'center',
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
				<Grid item lg={5} md={12} xs={12}>
					<CartInfo product={product} quantity={quantity} />
				</Grid>
				<Grid item lg={7} md={12} xs={12}>
					<Grid container spacing={2}>
						<Grid item lg={4} xs={6} md={4}>
							<CartQuantity quantity={quantity} onChange={handleSetQuantity} />
						</Grid>
						<Grid item lg={4} xs={4} md={4} className={classes.totalPriceSales}>
							{totalPriceSales}đ
						</Grid>
						<Grid item lg={4} xs={2} md={4} className={classes.removeBox}>
							<IconButton onClick={handleDelete} color="default" size="small">
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
