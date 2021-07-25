/* eslint-disable no-unused-expressions */
import { Box, Chip } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { useMemo } from 'react'
const FILTER_LIST = [
	{
		id: 1,
		getLabel: (filters) => 'Có mã giảm giá',
		isVisible: () => true,
		isActive: (filters) => filters.isPromotion,
		isRemovalble: false,
		onRemove: () => {},
		onToggle: (filters) => {
			const newFilter = { ...filters }
			if (newFilter.isPromotion) {
				delete newFilter.isPromotion
			} else {
				newFilter.isPromotion = true
			}
			return newFilter
		},
	},
	{
		id: 2,
		getLabel: (filters) => 'Miễn phí vận chuyển',
		isVisible: (filters) => filters.isFreeShip,
		isActive: (filters) => filters.isFreeShip,
		isRemovalble: true,
		onRemove: (filters) => {
			const newFilter = { ...filters }
			newFilter.isFreeShip = false
			return newFilter
		},
		onToggle: (filters) => null,
	},
	{
		id: 3,
		getLabel: (filters) => `${filters.salePrice_gte} - ${filters.salePrice_lte}`,
		isVisible: (filters) =>
			Object.keys(filters).includes('salePrice_gte') &&
			Object.keys(filters).includes('salePrice_lte') &&
			filters.salePrice_lte > filters.salePrice_gte > 0,
		isActive: (filters) => true,
		isRemovalble: true,
		onRemove: (filters) => {
			const newFilter = { ...filters }
			delete newFilter.salePrice_gte
			delete newFilter.salePrice_lte
			return newFilter
		},
		onToggle: (filters) => null,
	},
	{
		id: 4,
		getLabel: () => 'Thời Trang',
		isVisible: (filters) => (filters['category.id'] === 1 ? true : false),
		isActive: (filters) => true,
		isRemovalble: true,
		onRemove: (filters) => {
			const newFilter = { ...filters }
			delete newFilter['category.id']
			delete newFilter['category.id']
			return newFilter
		},
		onToggle: (filters) => null,
	},
	{
		id: 5,
		getLabel: () => 'Khẩu Trang',
		isVisible: (filters) => (filters['category.id'] === 2 ? true : false),
		isActive: (filters) => true,
		isRemovalble: true,
		onRemove: (filters) => {
			const newFilter = { ...filters }
			delete newFilter['category.id']
			delete newFilter['category.id']
			return newFilter
		},
		onToggle: (filters) => null,
	},
	{
		id: 6,
		getLabel: () => 'Làm Đẹp',
		isVisible: (filters) => (filters['category.id'] === 3 ? true : false),
		isActive: (filters) => true,
		isRemovalble: true,
		onRemove: (filters) => {
			const newFilter = { ...filters }
			delete newFilter['category.id']
			delete newFilter['category.id']
			return newFilter
		},
		onToggle: (filters) => null,
	},
	{
		id: 7,
		getLabel: () => 'Laptop',
		isVisible: (filters) => (filters['category.id'] === 4 ? true : false),
		isActive: (filters) => true,
		isRemovalble: true,
		onRemove: (filters) => {
			const newFilter = { ...filters }
			delete newFilter['category.id']
			delete newFilter['category.id']
			return newFilter
		},
		onToggle: (filters) => null,
	},
	{
		id: 8,
		getLabel: () => 'Ổ Cứng',
		isVisible: (filters) => (filters['category.id'] === 5 ? true : false),
		isActive: (filters) => true,
		isRemovalble: true,
		onRemove: (filters) => {
			const newFilter = { ...filters }
			delete newFilter['category.id']
			delete newFilter['category.id']
			return newFilter
		},
		onToggle: (filters) => null,
	},
	{
		id: 9,
		getLabel: () => 'Điện thoại',
		isVisible: (filters) => (filters['category.id'] === 6 ? true : false),
		isActive: (filters) => true,
		isRemovalble: true,
		onRemove: (filters) => {
			const newFilter = { ...filters }
			delete newFilter['category.id']
			delete newFilter['category.id']
			return newFilter
		},
		onToggle: (filters) => null,
	},
]
const useStyle = makeStyles((theme) => ({
	root: {
		padding: 0,
		margin: 0,
		display: 'flex',
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	filter: {
		listStyleType: 'none',
		paddingLeft: theme.spacing(1),
	},
	active: {
		backgroundColor: blue[500],
	},
}))
function ShowFilters({ onChange = null, filters = {} }) {
	const visibleFilters = useMemo(() => FILTER_LIST.filter((x) => x.isVisible(filters)), [filters])
	const classes = useStyle()
	return (
		<Box component="ul" className={classes.root}>
			{visibleFilters.map((x) => {
				return (
					<li key={x.id} className={classes.filter}>
						<Chip
							label={x.getLabel(filters)}
							className={x.isActive(filters) ? classes.active : ''}
							color={x.isActive(filters) ? 'primary' : 'default'}
							clickable={!x.isRemovalble}
							onClick={
								x.isRemovalble
									? null
									: () => {
											if (!onChange) return

											const newFilters = x.onToggle(filters)
											onChange(newFilters)
									  }
							}
							onDelete={
								!x.isRemovalble
									? null
									: () => {
											if (!onChange) return
											const newFilters = x.onRemove(filters)
											onChange(newFilters)
									  }
							}
						/>
					</li>
				)
			})}
		</Box>
	)
}

ShowFilters.propTypes = {
	filters: PropTypes.object,
	onChange: PropTypes.func,
}

export default ShowFilters
