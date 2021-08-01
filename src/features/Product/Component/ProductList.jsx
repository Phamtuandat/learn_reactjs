import { Grid } from '@material-ui/core'
import React from 'react'
import Product from './Product'

function ProductList({ products = [] }) {
	return (
		<Grid container spacing={1}>
			{products.map((product, index) => (
				<Grid item key={index} xs={6} md={4} lg={3} sm={6}>
					<Product product={product} />
				</Grid>
			))}
		</Grid>
	)
}

export default ProductList
