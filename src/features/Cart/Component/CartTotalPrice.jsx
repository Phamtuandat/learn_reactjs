import { Box, Button, makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import React from 'react'
import { useSelector } from 'react-redux'
import { cartTotalSelector } from '../CartSelector'

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3),
	},
	totalSaleBox: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: theme.spacing(4),
		color: grey[700],
	},
	priceDiscount: {
		borderBottom: '1px solid #ccc',
		display: 'flex',
		justifyContent: 'space-between',
		paddingBottom: theme.spacing(4),
		color: grey[700],
	},
	saleBox: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: theme.spacing(2),
		color: grey[700],
	},
	btn: {
		marginTop: theme.spacing(4),
	},
}))
function CartTotalPrice(props) {
	const classes = useStyles()
	const culatorPrice = useSelector(cartTotalSelector)
	console.log(culatorPrice)
	return (
		<Box className={classes.root}>
			<Box className={classes.saleBox}>
				<Box component="span" className={classes.title}>
					Tạm tính:
				</Box>
				<Box component="span" className={classes.price}>
					{new Intl.NumberFormat({
						style: 'currency',
						currency: 'VND',
					}).format(culatorPrice)}
					đ
				</Box>
			</Box>

			<Box className={classes.priceDiscount}>
				<Box component="span" className={classes.title}>
					Giảm giá:
				</Box>
				<Box component="span" className={classes.price}>
					0 đ
				</Box>
			</Box>
			<Box className={classes.totalSaleBox}>
				<Box component="span" className={classes.title}>
					Tổng cộng:
				</Box>
				<Box component="span" className={classes.price}>
					{new Intl.NumberFormat({
						style: 'currency',
						currency: 'VND',
					}).format(culatorPrice)}
					đ
				</Box>
			</Box>
			<Button
				fullWidth
				variant="contained"
				color="secondary"
				size="medium"
				className={classes.btn}
			>
				Thanh toán
			</Button>
		</Box>
	)
}

CartTotalPrice.propTypes = {}

export default CartTotalPrice
