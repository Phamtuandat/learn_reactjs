import { Grid } from '@material-ui/core'
import React from 'react'
import Product from './Product'

function ProductList({ products = [] }) {
	return (
		<Grid container spacing={0}>
			{products.map((product, index) => (
				<Product product={product} key={index} />
			))}
		</Grid>
	)
}

export default ProductList
