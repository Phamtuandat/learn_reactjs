import { makeStyles } from '@material-ui/core'
import React from 'react'
import Slider from './Component/Slider'
import Main from './page/Container'

const useStyles = makeStyles((theme) => ({}))
function HomePage() {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Slider />
			<Main />
		</div>
	)
}

export default HomePage
