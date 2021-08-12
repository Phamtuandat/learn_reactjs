import { Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { countItems } from './CartSelector'
import CartEmpty from './Component/CartEmpty'
import CartList from './Component/CartList'
import CartTotalPrice from './Component/CartTotalPrice'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(6),
		minHeight: theme.spacing(100),
	},
	title: {
		marginBottom: theme.spacing(2),
	},

	left: {
		marginBottom: theme.spacing(2),
	},
}))
function CartFeatures(props) {
	const cartItems = useSelector((state) => state.cart.cartItems)
	const count = useSelector(countItems)
	const classes = useStyles()
	return (
		<Container className={classes.root}>
			<Typography variant="h5" className={classes.title}>
				Giỏ hàng
			</Typography>
			{count ? (
				<Grid container spacing={3}>
					<Grid item lg={9} md={7} xs={12}>
						{cartItems.map((cartItem) => (
							<Paper className={classes.left} key={cartItem.id}>
								<CartList cartItem={cartItem} />
							</Paper>
						))}
					</Grid>
					<Grid item lg={3} md={5} xs={12}>
						<Paper className={classes.right}>
							<CartTotalPrice />
						</Paper>
					</Grid>
				</Grid>
			) : (
				<CartEmpty />
			)}
		</Container>
	)
}

export default CartFeatures
