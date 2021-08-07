import React from 'react'
import PropTypes from 'prop-types'
import { Box, Link, makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: 'auto',
		padding: 0,
	},
	categoryItem: {
		textDecoration: 'none',
		listStyleType: 'none',
		paddingLeft: 10,
		marginRight: 10,
		'&> a': {
			fontSize: 16,
			color: theme.palette.text.primary,
			fontWeight: 600,
		},
	},
}))
function ListCategory({ categoryList = [] }) {
	const classes = useStyles()
	return (
		<Box component="ul" className={classes.root}>
			{categoryList.map((item) => (
				<li key={item.id} className={classes.categoryItem}>
					<Link component={NavLink} to="">
						{item.name}
					</Link>
				</li>
			))}
		</Box>
	)
}

ListCategory.propTypes = {
	categoryList: PropTypes.array,
}

export default ListCategory
