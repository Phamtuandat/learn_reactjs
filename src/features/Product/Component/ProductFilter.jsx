import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles, Typography } from '@material-ui/core'
import FilterByCategory from './Filter/FilterByCategory'
import FilterByPrice from './Filter/FilterByPrice'
import FilterByService from './Filter/FilterByService'

const useStyle = makeStyles((theme) => ({
	title: {
		fontWeight: '500',
		padding: theme.spacing(2),
		paddingBottom: 0,
	},
	categoryList: {
		padding: theme.spacing(1),
		margin: 0,
	},
	root: {},
}))
function ProductFilter({ onChange, categoryList, filters }) {
	const classes = useStyle()
	const handleFilterCategory = (categoryId) => {
		if (onChange)
			onChange({
				'category.id': categoryId,
			})
	}
	const handleFilterPrice = (value) => {
		if (onChange) onChange(value)
	}

	return (
		<Box className={classes.root}>
			<Typography className={classes.title}>DANH MỤC SẢN PHẨM</Typography>
			<ul className={classes.categoryList}>
				{categoryList.map((x) => {
					return (
						<FilterByCategory
							key={x.id}
							onChange={handleFilterCategory}
							category={x}
							className={classes.listCategory}
						/>
					)
				})}
			</ul>
			<FilterByPrice onChange={handleFilterPrice} />
			<FilterByService filters={filters} onChange={handleFilterPrice} />
		</Box>
	)
}

ProductFilter.propTypes = {
	onChange: PropTypes.func,
	categoryList: PropTypes.array.isRequired,
	filters: PropTypes.object,
}

export default ProductFilter
