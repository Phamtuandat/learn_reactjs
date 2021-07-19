// import PropTypes from 'prop-types'
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import productApi from 'api/productAPI'
import React, { useEffect, useState } from 'react'
import ProductList from '../Component/ProductList'
import SkeletonListPage from '../Component/skeletonListPage'

const useStyle = makeStyles((theme) => ({
	root: {},
	right: {},
	pagination: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: theme.spacing(6),
	},
}))
function ListPage(props) {
	const classes = useStyle()
	const [productsList, setProductsList] = useState([])
	const [isLoading, setIsloading] = useState(true)
	const [pagination, setPagination] = useState({
		total: 12,
		page: 1,
	})

	const [filter, setFilter] = useState({
		_limit: 12,
		_page: 1,
	})

	useEffect(() => {
		try {
			;(async () => {
				const resp = await productApi.getAll(filter)
				setProductsList(resp.data)
				const total = resp.pagination.total.data
				const page = resp.pagination.page
				setPagination({
					page,
					total,
				})
			})()
		} catch (error) {
			console.log(error)
		}
		setIsloading(false)
	}, [filter])
	const handleChanePage = (e, page) => {
		setFilter((prevFilter) => ({
			...prevFilter,
			_page: page,
		}))
	}
	return (
		<Box>
			<Container>
				<Grid container spacing={1}>
					<Grid item xs={false} md={3} sm={3}>
						<Paper>left collum</Paper>
					</Grid>
					<Grid item xs={12} md={9} sm={9} className={classes.right}>
						<Paper>
							{isLoading ? (
								<SkeletonListPage lenght={12} />
							) : (
								<ProductList products={productsList} />
							)}
							<div className={classes.pagination}>
								<Pagination
									onChange={handleChanePage}
									count={Math.ceil(pagination.total / filter._limit)}
									page={pagination.page}
								/>
							</div>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default ListPage
