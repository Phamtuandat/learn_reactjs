import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Slider from './Component/Slider'

const useStyles = makeStyles((theme) => ({}))
function HomePage() {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Slider />
			<Container maxWidth={false}>
				<Grid container>
					<Grid item lg={12} md={12} xs={12}>
						{/* container item collum */}
						<Container maxWidth={false}>
							<Grid container>
								<Grid item lg={12} md={12}>
									item
								</Grid>
							</Grid>
						</Container>
						{/* container item collum */}
						<Container maxWidth={false}>
							<Grid container>
								<Grid item lg={12} md={12}>
									item
								</Grid>
							</Grid>
						</Container>
						{/* container item collum */}
						<Container maxWidth={false}>
							<Grid container>
								<Grid item lg={12} md={12}>
									item
								</Grid>
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default HomePage
