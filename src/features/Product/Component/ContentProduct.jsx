import { Box, Grid } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		height: '100%',
		padding: theme.spacing(4),
		borderLeft: '1px solid #ccc',
		boxSizing: 'border-box',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	price: {
		backgroundColor: grey[100],
		padding: theme.spacing(2, 4),
		display: 'flex',
		alignItems: 'baseLine',
	},
	salePrice: {
		fontSize: theme.typography.h3.fontSize,
	},
	originalPrice: {
		textDecoration: 'line-through',
		marginLeft: theme.spacing(2),
	},
	promotionPercent: {
		marginLeft: theme.spacing(2),
	},
	shortDescription: {
		letterSpacing: '2px',
		marginBottom: theme.spacing(3),
		color: theme.palette.grey[900],
	},
	name: {
		marginBottom: theme.spacing(4),
	},
}))

function ContentProduct({ product }) {
	const classes = useStyles()
	const { originalPrice, promotionPercent, salePrice, shortDescription, name } = product
	console.log(product)
	return (
		<Box className={classes.root}>
			<Typography variant="h4" color="textPrimary" className={classes.name}>
				{name}
			</Typography>
			<Typography variant="body2" component="p" className={classes.shortDescription}>
				{shortDescription}
				<br />
			</Typography>
			<Grid container className={classes.price}>
				<Box component="span" color="textPrimary" className={classes.salePrice}>
					{new Intl.NumberFormat({ style: 'currency', currency: 'VND' }).format(salePrice)}đ
				</Box>
				<Box component="span" color="textPrimary" className={classes.originalPrice}>
					{new Intl.NumberFormat({ style: 'currency', currency: 'VND' }).format(originalPrice)}đ
				</Box>
				<Box component="span" color="textPrimary" className={classes.promotionPercent}>
					<span>-</span>
					{new Intl.NumberFormat({ style: 'currency', currency: 'VND' }).format(promotionPercent)}%
				</Box>
			</Grid>
		</Box>
	)
}

ContentProduct.propTypes = {
	product: PropTypes.object,
}

export default ContentProduct
