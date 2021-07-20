import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { useState } from 'react'

const useStyle = makeStyles({
	ative: {
		fontWeight: 'bold',
	},
})
function FilterByCategory({ onChange, category }) {
	const classes = useStyle()
	const [catergoryID, setcatergoryID] = useState()
	const handleChange = (categoryId) => {
		setcatergoryID(categoryId)
		if (onChange) onChange(categoryId)
	}
	return (
		<Box>
			<Typography
				className={category.id === catergoryID ? classes.ative : ''}
				onClick={() => handleChange(category.id)}
			>
				{category.name}
			</Typography>
		</Box>
	)
}

FilterByCategory.propTypes = {
	onChange: PropTypes.func,
	category: PropTypes.object.isRequired,
}

export default FilterByCategory
