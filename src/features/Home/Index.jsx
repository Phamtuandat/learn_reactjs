import { makeStyles } from '@material-ui/core'
import Button from 'components/Button'
import React, { useEffect } from 'react'
import Slider from './Component/Slider'
import Main from './page/Container'

const useStyles = makeStyles((theme) => ({}))
function HomePage() {
	useEffect(() => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}, [])
	const handleScrollToTop = () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Slider />
			<Main />
			<Button handleScrollToTop={handleScrollToTop} />
		</div>
	)
}

export default HomePage
