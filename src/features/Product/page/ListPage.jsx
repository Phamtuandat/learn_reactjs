import { Box, Container, Grid, makeStyles, Paper, withWidth } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import categoryApi from 'api/categoryAPI'
import productApi from 'api/productAPI'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import React, { useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import PriceFilter from '../Component/Filter/PriceFilter'
import ProductFilter from '../Component/ProductFilter'
import ProductList from '../Component/ProductList'
import ShowFilters from '../Component/ShowFilters'
import SkeletonListPage from '../Component/skeletonListPage'

const useStyle = makeStyles((theme) => ({
	root: {},
	ShowFilters: {
		minHeight: 64,
	},
	pagination: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		marginTop: theme.spacing(6),
		paddingBottom: theme.spacing(2),
	},
}))
function ListPage(props) {
	const classes = useStyle()

	const history = useHistory()
	const location = useLocation()
	const queryParam = useMemo(() => {
		const params = queryString.parse(location.search)
		return {
			...params,
			_sort: params._sort || 'salePrice:ASC',
			_limit: +params._limit || 12,
			_page: +params._page || 1,
			isFreeShip: params.isFreeShip === 'true' ? true : null,
			isPromotion: params.isPromotion === 'true' ? true : null,
			'category.id': +params['category.id'] || null,
		}
	}, [location.search])

	const [productsList, setProductsList] = useState([])
	const [isLoading, setIsloading] = useState(true)
	const [categoryList, setCategoryList] = useState([])
	const [pagination, setPagination] = useState({
		total: 12,
		page: 1,
	})
	useEffect(() => {
		try {
			setIsloading(true)
			;(async () => {
				const resp = await productApi.getAll(queryParam)
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
	}, [queryParam])
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
		const filter = {
			...queryParam,
			_page: page,
		}
		history.push({
			pathname: history.location.pathname,
			search: queryString.stringify(filter),
		})
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}
	const handleChange = (value) => {
		const filter = {
			...queryParam,
			_sort: value,
			_page: 1,
		}
		history.push({
			pathname: history.location.pathname,
			search: queryString.stringify(filter),
		})
	}
	const handleFilter = (filter) => {
		const newFilter = {
			...queryParam,
			...filter,
			_page: 1,
		}
		history.push({
			pathname: history.location.pathname,
			search: queryString.stringify(newFilter),
		})
	}
	const handleShowFilter = (filter) => {
		history.push({
			pathname: history.location.pathname,
			search: queryString.stringify(filter),
		})
	}

	return (
		<Box className={classes.root}>
			<Container maxWidth={false}>
				<Grid container spacing={1}>
					<>
						<Grid item md={3} sm={12} xs={12} lg={2}>
							<Paper elevation={0}>
								<ProductFilter
									categoryList={categoryList}
									onChange={handleFilter}
									filters={queryParam}
								/>
							</Paper>
						</Grid>
					</>
					<Grid item xs={12} md={9} sm={12} lg={10} className={classes.right}>
						<Paper elevation={0}>
							<PriceFilter onChange={handleChange} currentFilter={queryParam._sort} />
							{isLoading ? (
								<SkeletonListPage lenght={productsList.length} />
							) : (
								<div className={classes.ShowFilters}>
									<ShowFilters filters={queryParam} onChange={handleShowFilter} />
									<ProductList products={productsList} />
								</div>
							)}
							<div className={classes.pagination}>
								<Pagination
									onChange={handleChanePage}
									count={Math.ceil(pagination.total / queryParam._limit)}
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
ListPage.propTypes = {
	width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}
export default withWidth()(ListPage)
