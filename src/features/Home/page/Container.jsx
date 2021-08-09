import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Category from '../Component/Category'

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '80px auto',
	},
	headerLine: {
		textAlign: 'center',
		backgroundColor: 'black',
		height: 4,
		width: '100%',
	},
	headerTitle: {
		width: 300,
		backgroundColor: 'white',
		fontSize: theme.typography.h5.fontSize,
		position: 'absolute',
		right: '50%',
		transform: 'translateX(+50%) translateY(-50%)',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	header: {
		position: 'relative',
		display: 'flex',
		marginBottom: 80,
	},
}))
function Main(props) {
	const classes = useStyles()

	const categories = useSelector((state) => state.categories.categoryList)

	return (
		<Container className={classes.root}>
			<Box className={classes.header}>
				<Box className={classes.headerLine} />
				<Box className={classes.headerTitle}>CỬA HÀNG</Box>
			</Box>
			<Grid container>
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<Grid container spacing={8}>
						{categories.map((category) => (
							<Grid item lg={4} md={4} sm={6} xs={12}>
								<Category category={category} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

Main.propTypes = {}

export default Main
