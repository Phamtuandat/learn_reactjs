import { Box, CardMedia, makeStyles, Typography } from '@material-ui/core'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'Contant'
import PropTypes from 'prop-types'
import React from 'react'

const useStyle = makeStyles((theme) => ({
	title: {
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
	},
}))
function Product({ product }) {
	const classes = useStyle()
	const thumbnail = product.thumbnail
		? `${STATIC_HOST}${product.thumbnail.url}`
		: THUMBNAIL_PLACEHOLDER
	return (
		<Box padding={1}>
			<Box padding={1}>
				<CardMedia
					component="img"
					alt={product.name}
					height="225"
					image={thumbnail}
					title={product.name}
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
