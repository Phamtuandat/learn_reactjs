import { Box, Hidden, makeStyles, Typography, withWidth } from '@material-ui/core'
import BurstModeIcon from '@material-ui/icons/BurstMode'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import LaptopIcon from '@material-ui/icons/Laptop'
import RedditIcon from '@material-ui/icons/Reddit'
import RedeemIcon from '@material-ui/icons/Redeem'
import SmartphoneIcon from '@material-ui/icons/Smartphone'
import PropTypes from 'prop-types'
import React from 'react'
import FilterByCategory from './Filter/FilterByCategory'
import FilterByPrice from './Filter/FilterByPrice'
import FilterByService from './Filter/FilterByService'

const ICON_LIST = [
	{
		id: 1,
		component: <BurstModeIcon />,
	},
	{
		id: 2,
		component: <RedditIcon />,
	},
	{
		id: 3,
		component: <RedeemIcon />,
	},
	{
		id: 4,
		component: <LaptopIcon />,
	},
	{
		id: 5,
		component: <CreditCardIcon />,
	},
	{
		id: 6,
		component: <SmartphoneIcon />,
	},
]
const useStyle = makeStyles((theme) => ({
	title: {
		fontWeight: '500',
		padding: theme.spacing(2),
		paddingBottom: 0,
	},
	categoryList: {
		padding: theme.spacing(1),
		margin: ' 10px  0 10px 0',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
		},
	},
	root: {},
}))
function ProductFilter({ onChange, categoryList, filters }) {
	const classes = useStyle()
	const handleFilterCategory = (categoryId) => {
		if (onChange)
			onChange({
				'category.id': categoryId,
			})
	}

	const handleFilterService = (value) => {
		if (onChange) onChange(value)
	}
	const handleFilterPrice = (value) => {
		const newValue = { ...value }
		if (newValue.salePrice_lte !== 0 && newValue.salePrice_lte > newValue.salePrice_gte) {
			if (
				!newValue.salePrice_lte ||
				(!newValue.salePrice_gte && newValue.salePrice_gte !== 0)
			) {
				return
			} else {
				onChange(newValue)
			}
		}
	}

	return (
		<Box className={classes.root}>
			<Typography className={classes.title}>DANH MỤC SẢN PHẨM</Typography>
			<ul className={classes.categoryList}>
				{categoryList.map((x) => {
					return (
						<FilterByCategory
							key={x.id}
							onChange={handleFilterCategory}
							category={x}
							className={classes.listCategory}
							icon={ICON_LIST.filter((item) => x.id === item.id)}
						/>
					)
				})}
			</ul>
			<Hidden xsDown>
				<FilterByPrice onChange={handleFilterPrice} />
			</Hidden>
			<FilterByService filters={filters} onChange={handleFilterService} />
		</Box>
	)
}

ProductFilter.propTypes = {
	onChange: PropTypes.func,
	categoryList: PropTypes.array.isRequired,
	filters: PropTypes.object,
}

export default withWidth()(ProductFilter)
