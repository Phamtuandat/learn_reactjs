import { Link, Typography } from '@material-ui/core'
import React from 'react'

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
		</Typography>
	)
}

export default Copyright
