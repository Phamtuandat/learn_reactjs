import { makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

const useStyle = makeStyles((theme) => ({
	listCategory: {
		listStyleType: 'none',
	},
	category: {
		paddingTop: theme.spacing(2),
		paddingLeft: theme.spacing(2),
		cursor: 'pointer',
		'&:hover': {
			color: theme.palette.primary.dark,
		},
	},
}))
function FilterByCategory({ onChange, category }) {
	const classes = useStyle()
	const handleChange = (categoryId) => {
		if (onChange) onChange(categoryId)
	}
	return (
		<li className={classes.listCategory}>
			<Typography
				variant="body2"
				onClick={() => handleChange(category.id)}
				className={classes.category}
			>
				{category.name}
			</Typography>
		</li>
	)
}

FilterByCategory.propTypes = {
	onChange: PropTypes.func,
	category: PropTypes.object.isRequired,
}

export default FilterByCategory
