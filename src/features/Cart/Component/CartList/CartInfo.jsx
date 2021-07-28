import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'Contant'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
	info: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		width: 222,
		color: grey[600],
	},
	content: {
		width: 60,
		marginRight: theme.spacing(2),
	},
	root: {
		display: 'flex',
	},
	title: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		width: 222,
	},
	infoBox: {
		display: 'flex',
		justifySelf: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
	},
}))
function CartInfo({ product }) {
	const classes = useStyles()
	const thumbnail = product.thumbnail
		? `${STATIC_HOST}${product.thumbnail.url}`
		: THUMBNAIL_PLACEHOLDER
	return (
		<Box className={classes.root}>
			<img src={thumbnail} alt={product.name} className={classes.content} />
			<Box className={classes.infoBox}>
				<Typography variant="body2" component="h2" className={classes.title}>
					{product.name}
				</Typography>
				<Typography variant="caption" component="h2" className={classes.info}>
					{product.shortDescription}
				</Typography>
			</Box>
		</Box>
	)
}

CartInfo.propTypes = {
	product: PropTypes.object,
}

export default CartInfo
