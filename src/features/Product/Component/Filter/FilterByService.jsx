import { Box, FormControlLabel, makeStyles, Typography, Checkbox } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(2),
	},
	filters: {
		listStyleType: 'none',
		margin: 0,
		padding: 0,
		'& > li:hover': {
			color: theme.palette.primary.dark,
		},
	},
}))
function FilterByService({ onChange, filters = {} }) {
	const classes = useStyle()

	const handleChange = (e) => {
		const { checked, name } = e.target
		onChange({
			[name]: checked,
		})
	}

	return (
		<Box className={classes.root}>
			<Typography variant="subtitle2" className={classes.title}>
				Tìm theo dịch vụ
			</Typography>
			<ul className={classes.filters}>
				{[
					{ value: 'isFreeShip', label: 'miễn phí vận chuyển' },
					{ value: 'isPromotion', label: 'Có giảm giá' },
				].map((x) => {
					return (
						<li key={x.value}>
							<FormControlLabel
								control={
									<Checkbox
										name={x.value}
										onChange={handleChange}
										checked={filters[x.value] ? true : false}
										className={classes.filter}
										color="primary"
										size="small"
									/>
								}
								label={x.label}
							/>
						</li>
					)
				})}
			</ul>
		</Box>
	)
}

export default FilterByService
