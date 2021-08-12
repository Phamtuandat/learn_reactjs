import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Category from '../Component/Category'
import TopSale from '../Component/TopSale'
import TrendSlick from '../Component/TrendSlick'

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
	headerTrend: {
		position: 'relative',
		display: 'flex',
		marginTop: 80,
	},
	headerTrendLine: {
		textAlign: 'center',
		backgroundColor: 'black',
		height: 4,
		width: '100%',
	},
	headerTrendTitle: {
		width: 300,
		backgroundColor: 'white',
		fontSize: theme.typography.h5.fontSize,
		position: 'absolute',
		right: '50%',
		transform: 'translateX(+50%) translateY(-50%)',
		textAlign: 'center',
		fontWeight: 'bold',
	},
}))
function Main(props) {
	const classes = useStyles()

	const categories = useSelector((state) => state.categories.categoryList)
	const images = (category) =>
		`https://meros-custom-color-1-demo.mybigcommerce.com/product_images/uploaded_images/images-custom-block-${category.id}.jpg`

	return (
		<Container className={classes.root}>
			<Box className={classes.header}>
				<Box className={classes.headerLine} />
				<Box className={classes.headerTitle}>CỬA HÀNG</Box>
			</Box>
			<Grid container>
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<Grid container spacing={4}>
						{categories.map((category) => (
							<Grid item lg={4} md={4} sm={6} xs={12} key={category.id}>
								<Category category={category} image={images(category)} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
			<Box className={classes.headerTrend}>
				<Box className={classes.headerTrendLine} />
				<Box className={classes.headerTrendTitle}>Xu Hướng</Box>
			</Box>
			<Grid container>
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<TrendSlick productList={categories[0]?.products} />
				</Grid>
			</Grid>
			<Box className={classes.headerTrend}>
				<Box className={classes.headerTrendLine} />
				<Box className={classes.headerTrendTitle}>Bán Chạy Nhất</Box>
			</Box>

			<TopSale productList={categories[0]?.products} />
		</Container>
	)
}

Main.propTypes = {}

export default Main
