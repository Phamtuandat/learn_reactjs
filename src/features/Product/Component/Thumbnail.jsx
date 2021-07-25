import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'Contant'
import PropTypes from 'prop-types'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const useStyles = makeStyles((theme) => ({
	root: {
		magin: 0,
	},
	content: {
		width: '100%',
	},
}))

function Thumbnail({ product, isLoading }) {
	const classes = useStyles()
	const thumbnail = product.thumbnail
		? `${STATIC_HOST}${product.thumbnail.url}`
		: THUMBNAIL_PLACEHOLDER
	return (
		<Box>
			<img src={thumbnail} alt={product.name} className={classes.content} />
		</Box>
	)
}

Thumbnail.propTypes = {
	product: PropTypes.object,
	isLoading: PropTypes.bool,
}

export default Thumbnail
