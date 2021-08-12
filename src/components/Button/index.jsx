import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, makeStyles } from '@material-ui/core'
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded'

const useStyles = makeStyles((theme) => ({
	btn: {
		position: 'fixed',
		top: '90%',
		left: '100%',
		transform: 'translateX(-100%) rotate(-90deg)',
		backgroundColor: '#f5f5f5',
		boxShadow: theme.shadows[2],
		zIndex: 1,
		borderRadius: '0px',
	},
}))
function Button({ handleScrollToTop = null }) {
	const classes = useStyles()
	return (
		<div>
			<IconButton className={classes.btn} onClick={handleScrollToTop}>
				<DoubleArrowRoundedIcon />
			</IconButton>
		</div>
	)
}

Button.propTypes = {
	handleScrollToTop: PropTypes.func,
}

export default Button
