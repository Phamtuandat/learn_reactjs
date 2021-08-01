import { Box, CardMedia, makeStyles, Typography } from '@material-ui/core'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'Contant'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
	root: {
		cursor: 'pointer',
		overflow: 'hidden',
	},
	title: {
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		paddingBottom: 8,
	},
	cardMedia: {
		transition: theme.transitions.create(['transform'], {
			duration: theme.transitions.duration.complex,
		}),
		padding: 0,
		'&:hover': {
			transform: 'scale(1.1)',
		},
	},
	imageBox: {
		overflow: 'hidden',
		padding: 0,
	},
	infoBox: {
		padding: 14,
	},
}))
function Product({ product }) {
	const history = useHistory()
	const classes = useStyle()
	const thumbnail = product.thumbnail
		? `${STATIC_HOST}${product.thumbnail.url}`
		: THUMBNAIL_PLACEHOLDER
	const handleClick = () => {
		history.push(`/products/${product.id}`)
	}
	return (
		<Box padding={1} className={classes.root} onClick={handleClick}>
			<Box padding={1} className={classes.imageBox}>
				<CardMedia
					component="img"
					alt={product.name}
					image={thumbnail}
					title={product.name}
					className={classes.cardMedia}
				/>
			</Box>
			<Box className={classes.infoBox}>
				<Typography variant="body2" className={classes.title}>
					{product.name}
				</Typography>
				<Typography variant="body2">
					<Box mr={1} fontWeight="bold" component="span">
						{new Intl.NumberFormat({ style: 'currency', currency: 'VND' }).format(
							product.salePrice
						)}
						đ
					</Box>
					{product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}
				</Typography>
			</Box>
		</Box>
	)
}

Product.propTypes = {
	product: PropTypes.object,
}

export default Product
