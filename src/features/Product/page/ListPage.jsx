/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import categoryApi from 'api/categoryAPI'
import productApi from 'api/productAPI'
import React, { useEffect, useState } from 'react'
import PriceFilter from '../Component/Filter/PriceFilter'
import ProductFilter from '../Component/ProductFilter'
import ProductList from '../Component/ProductList'
import SkeletonListPage from '../Component/skeletonListPage'

const useStyle = makeStyles((theme) => ({
	root: {},
	right: {},
	pagination: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: theme.spacing(6),
		padding: theme.spacing(2),
	},
}))
function ListPage(props) {
	const classes = useStyle()
	const [productsList, setProductsList] = useState([])
	const [isLoading, setIsloading] = useState(true)
	const [categoryList, setCategoryList] = useState([])
	const [pagination, setPagination] = useState({
		total: 12,
		page: 1,
	})

	const [filter, setFilter] = useState({
		_limit: 12,
		_page: 1,
		_sort: 'salePrice:ASC',
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
			setIsloading(false)
		}
		setTimeout(() => {
			setIsloading(false)
		}, 1000)
		return () => clearTimeout()
	}, [filter])
	useEffect(() => {
		try {
			;(async () => {
				const categoryList = await categoryApi.getAll()
				setCategoryList(categoryList.data)
			})()
		} catch (error) {
			console.log('fail to load category!!')
		}
	}, [])
	const handleChanePage = (e, page) => {
		setFilter((prevFilter) => ({
			...prevFilter,
			_page: page,
		}))
	}
	const handleChange = (value) => {
		setFilter((prevFilter) => ({
			...prevFilter,
			_sort: value,
		}))
	}
	const handleFilterCategory = (categoryId) => {
		setFilter((prevFilter) => ({
			...prevFilter,
			'category.id': categoryId,
		}))
	}
	return (
		<Box>
			<Container maxWidth="lg">
				<Grid container spacing={1}>
					<Grid item xs={false} md={3} sm={3}>
						<Paper>
							<ProductFilter categoryList={categoryList} onChange={handleFilterCategory} />
						</Paper>
					</Grid>
					<Grid item xs={12} md={9} sm={9} className={classes.right}>
						<Paper>
							<PriceFilter onChange={handleChange} currentFilter={filter._sort} />
							{isLoading ? (
								<SkeletonListPage lenght={productsList.length} />
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
