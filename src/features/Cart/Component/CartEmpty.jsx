import { Button, CardMedia, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: 340,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	img: {
		width: '175px',
		height: '175px',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	title: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 12,
	},
	btn: {
		marginLeft: 'auto',
		marginRight: 'auto',
		textDecoration: 'none',
		marginTop: 24,
	},
	btnLink: {
		fontSize: 12,
		width: 222,
		backgroundColor: 'rgb(253, 216, 53)',
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: 'rgb(253, 206, 3)',
			boxShadow: 'none',
		},
	},
}))
const CartEmpty = () => {
	const classes = useStyles()
	return (
		<Paper elevation={0} className={classes.root}>
			<CardMedia
				image="https://salt.tikicdn.com/desktop/img/mascot@2x.png"
				title="cart empty"
				className={classes.img}
			/>
			<Typography variant="body1" className={classes.title}>
				Chưa có sản phẩm trong giỏ hàng
			</Typography>
			<NavLink to="/Products" className={classes.btn}>
				<Button variant="contained" className={classes.btnLink}>
					Tiếp tục mua sắm
				</Button>
			</NavLink>
		</Paper>
	)
}

export default CartEmpty
