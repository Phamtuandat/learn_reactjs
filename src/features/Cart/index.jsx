import { Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import CartList from './Component/CartList'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(6),
	},
	title: {
		marginBottom: theme.spacing(2),
	},
	left: {},
	right: {},
}))
function CartFeatures(props) {
	const cartItems = useSelector((state) => state.cart.cartItems)
	const classes = useStyles()
	return (
		<Container className={classes.root}>
			<Typography variant="h5" className={classes.title}>
				Giỏ hàng
			</Typography>
			<Grid container spacing={3}>
				<Grid item lg={8} md={8} xs={12}>
					<Paper className={classes.left}>
						{cartItems.map((cartItem) => (
							<CartList key={cartItem.id} cartItem={cartItem} />
						))}
					</Paper>
				</Grid>
				<Grid item lg={4} md={4} xs={12}>
					<Paper className={classes.right}>right</Paper>
				</Grid>
			</Grid>
		</Container>
	)
}

export default CartFeatures
