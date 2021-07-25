import { Box, Link, makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		margin: theme.spacing(8),
	},
	menuItem: {
		listStyleType: 'none',
		marginRight: theme.spacing(6),
		'& > a': {
			color: grey[800],
			fontSize: theme.typography.h6.fontSize,
		},
		'& > a.active': {
			textDecoration: 'underline',
			color: grey[900],
		},
	},
}))
function ProductMenus(props) {
	const classes = useStyle()
	const { url } = useRouteMatch()
	return (
		<Box component="ul" className={classes.root}>
			<li className={classes.menuItem}>
				<Link component={NavLink} to={`${url}/`} exact>
					Description
				</Link>
			</li>
			<li className={classes.menuItem}>
				<Link component={NavLink} to={`${url}/Additional`}>
					Additional
				</Link>
			</li>
			<li className={classes.menuItem}>
				<Link component={NavLink} to={`${url}/Reviews`}>
					Reviews
				</Link>
			</li>
		</Box>
	)
}

ProductMenus.propTypes = {}

export default ProductMenus
