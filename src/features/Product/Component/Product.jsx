import {
	Box,
	Button,
	CardMedia,
	Fade,
	Grid,
	makeStyles,
	Slide,
	Typography,
} from '@material-ui/core'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import { THUMBNAIL_PLACEHOLDER } from 'Contant'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { addToWishList } from 'features/wish/WishListSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from 'features/Cart/CartSlice'

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
	viewIcon: {
		position: 'absolute',
		zIndex: 1,
		top: 16,
		right: 16,
		borderRadius: '50%',
	},
	wishIcon: {
		position: 'absolute',
		zIndex: 1,
		top: 60,
		right: 16,
		borderRadius: '50%',
	},
	viewBox: {
		fontSize: 22,
	},
	actBtn: {
		border: 'none !important',
	},
	wishBox: {
		fontSize: 22,
		color: theme.palette.error.main,
	},
	addToCart: {
		backgroundColor: 'white',
		position: 'absolute',
		top: '65%',
		zIndex: 1,
		left: '50%',
		transform: 'translateX(-50%)',
		fontSize: '14px',
		padding: '10px',
	},
	addToCartBtn: {},
}))
function Product({ product }) {
	const [onHover, setOnHover] = useState(false)
	const dispatch = useDispatch()

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
			className={classes.productCard}
			onMouseOver={() => setOnHover(true)}
			onMouseLeave={() => setOnHover(false)}
		>
			<Box className={classes.root} position="relative">
				<Slide direction="down" in={onHover} className={classes.viewIcon}>
					<Button variant="contained" className={classes.actBtn}>
						<VisibilityOutlinedIcon className={classes.viewBox} />
					</Button>
				</Slide>
				<Fade
					timeout={500}
					direction="left"
					in={onHover}
					className={classes.wishIcon}
					disableStrictModeCompat
				>
					<Button
						variant="contained"
						className={classes.actBtn}
						onClick={() => dispatch(addToWishList(product))}
					>
						<FavoriteBorderIcon className={classes.wishBox} />
					</Button>
				</Fade>
				<Fade
					timeout={300}
					direction="left"
					in={onHover}
					className={classes.addToCart}
					disableStrictModeCompat
				>
					<Button
						variant="contained"
						className={classes.addToCartBtn}
						onClick={() =>
							dispatch(
								addToCart({
									id: product.id,
									product,
									quantity: 1,
								})
							)
						}
					>
						Thêm vào giỏ hàng
					</Button>
				</Fade>
				<Box className={classes.imageBox} onClick={handleClick}>
					<CardMedia
						component="img"
						alt={product.name}
						image={thumbnail}
						title={product.name}
						className={classes.cardMedia}
					></CardMedia>
				</Box>
				<Box className={classes.infoBox} onClick={handleClick}>
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
