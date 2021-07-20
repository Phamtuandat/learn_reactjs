import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import FilterByCategory from './Filter/FilterByCategory'

function ProductFilter({ onChange, categoryList }) {
	const handleFilter = (categoryId) => {
		onChange(categoryId)
	}
	return (
		<Box>
			<Typography>DANH MỤC SẢN PHẨM</Typography>
			<ul>
				{categoryList.map((x) => {
					return (
						<li key={x.id}>
							<FilterByCategory onChange={handleFilter} category={x} />
						</li>
					)
				})}
			</ul>
		</Box>
	)
}

ProductFilter.propTypes = {
	onChange: PropTypes.func,
	categoryList: PropTypes.array.isRequired,
}

export default ProductFilter
