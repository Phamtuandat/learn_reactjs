import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs } from '@material-ui/core'

function PriceFilter({ onChange, currentFilter }) {
	const handleChange = (e, value) => {
		if (onChange) onChange(value)
	}
	return (
		<Tabs
			fullWidth
			value={currentFilter}
			indicatorColor="primary"
			textColor="primary"
			onChange={handleChange}
			aria-label="disabled tabs example"
		>
			<Tab label="Giá từ thấp tới cao" value="salePrice:ASC" />
			<Tab label="Giá từ cao tới thấp" value="salePrice:DESC" />
		</Tabs>
	)
}

PriceFilter.propTypes = { handleChange: PropTypes.func, currentFilter: PropTypes.string.isRequired }

export default PriceFilter
