import React from 'react'
import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'
import { Box } from '@material-ui/core'

function ProductDescription({ product }) {
	const safeRender = DOMPurify.sanitize(product.description)
	return (
		<Box padding={6}>
			<div dangerouslySetInnerHTML={{ __html: safeRender }} />
		</Box>
	)
}

ProductDescription.propTypes = {
	product: PropTypes.object,
}

export default ProductDescription
