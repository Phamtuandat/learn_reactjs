import { Grid } from '@material-ui/core'
import React from 'react'
import Product from './Product'

function ProductList({ products }) {
	return (
		<Grid container spacing={0}>
			{products.map((product, index) => (
				<Grid item key={index} xs={12} md={4} lg={3}>
					<Product product={product} />
				</Grid>
			))}
		</Grid>
	)
}

export default ProductList
