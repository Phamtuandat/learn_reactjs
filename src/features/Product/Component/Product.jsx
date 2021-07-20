import { Box, CardMedia, makeStyles, Typography } from '@material-ui/core'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'Contant'
import PropTypes from 'prop-types'
import React from 'react'

const useStyle = makeStyles((theme) => ({
	root: {
		'&:hover': {
			boxShadow: ' rgb(0 0 0 / 10%) 0px 0px 20px',
			zIndex: 1,
		},
		cursor: 'pointer',
		height: '100%',
	},
	title: {
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
	},
	cardMedia: {},
}))
function Product({ product }) {
	const classes = useStyle()
	const thumbnail = product.thumbnail
		? `${STATIC_HOST}${product.thumbnail.url}`
		: THUMBNAIL_PLACEHOLDER
	return (
		<Box padding={1} className={classes.root}>
			<Box padding={1}>
				<CardMedia
					component="img"
					alt={product.name}
					image={thumbnail}
					title={product.name}
					className={classes.cardMedia}
				/>
			</Box>
			<Typography variant="body1" className={classes.title}>
				{product.name}
			</Typography>
			<Typography variant="body1">
				<Box mr={1} fontWeight="bold" component="span">
					{new Intl.NumberFormat({ style: 'currency', currency: 'VND' }).format(product.salePrice)}đ
				</Box>
				{product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}
			</Typography>
		</Box>
	)
}

Product.propTypes = {
	product: PropTypes.object,
}

export default Product
