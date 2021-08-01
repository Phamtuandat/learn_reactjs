import { IconButton, makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

const useStyle = makeStyles((theme) => ({
	listCategory: {
		listStyleType: 'none',
		display: 'flex',
		[theme.breakpoints.down('xs')]: {
			width: '30%',
			flexDirection: 'column',
		},
	},
	category: {
		fontSize: 14,
		paddingTop: theme.spacing(2),
		paddingLeft: theme.spacing(2),
		cursor: 'pointer',
		'&:hover': {
			color: theme.palette.primary.dark,
		},
	},
}))
function FilterByCategory({ onChange, category, icon }) {
	const classes = useStyle()
	const handleChange = (categoryId) => {
		if (onChange) onChange(categoryId)
	}
	return (
		<li className={classes.listCategory} onClick={() => handleChange(category.id)}>
			<IconButton>{icon[0].component}</IconButton>
			<Typography className={classes.category}>{category.name}</Typography>
		</li>
	)
}

FilterByCategory.propTypes = {
	onChange: PropTypes.func,
	category: PropTypes.object.isRequired,
}

export default FilterByCategory
