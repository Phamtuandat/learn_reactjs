import { Box, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import { THUMBNAIL_PLACEHOLDER } from 'Contant'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
	productCard: {
		display: 'flex',
	},
	root: {
		marginLeft: 16,
		cursor: 'pointer',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		marginBottom: theme.spacing(2),
		boxShadow: ' rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
		flex: 1,
	},
	title: {
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		paddingBottom: 'auto',
	},
	cardMedia: {
		flexShrink: 0,
		transition: theme.transitions.create(['transform'], {
			duration: theme.transitions.duration.complex,
		}),
		padding: 0,
		'&:hover': {
			transform: 'scale(1.1)',
		},
	},
	imageBox: {
		borderRadius: '5px 5px 0px 0px',
		overflow: 'hidden',
		padding: 0,
		flex: 1,
	},
	infoBox: {
		flexShrink: 0,
		padding: 14,
		marginTop: 16,
	},
}))
function Product({ product }) {
	const history = useHistory()
	const classes = useStyle()
	const thumbnail = THUMBNAIL_PLACEHOLDER(product.category.id)
	const handleClick = () => {
		history.push(`/products/${product.id}`)
	}
	return (
		<Grid
			item
			xs={6}
			md={6}
			lg={3}
			sm={6}
			onClick={handleClick}
			className={classes.productCard}
		>
			<Box className={classes.root}>
				<Box className={classes.imageBox}>
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
		</Grid>
	)
}

Product.propTypes = {
	product: PropTypes.object,
}

export default Product
