import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const useStyle = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
		marginTop: theme.spacing(3),
	},
	filters: {
		display: 'flex',
		flexWrap: 'nowrap',
	},
	title: {
		paddingBottom: theme.spacing(1),
		fontSize: '16px',
	},
	filter: {
		padding: theme.spacing(1),
	},
}))
function FilterByPrice({ onChange }) {
	const classes = useStyle()
	const [values, setvalues] = useState({
		salePrice_gte: 0,
		salePrice_lte: 0,
	})
	const handleChange = (e) => {
		const { value, name } = e.target
		setvalues((prevValues) => ({
			...prevValues,
			[name]: value,
		}))
	}
	const handleSubmit = () => {
		if (onChange) {
			onChange(values)
			setvalues({
				salePrice_gte: 0,
				salePrice_lte: 0,
			})
		}
	}
	return (
		<Box className={classes.root}>
			<Typography variant="subtitle2" className={classes.title}>
				Tìm theo khoảng giá
			</Typography>
			<Box className={classes.filters}>
				<TextField
					name="salePrice_gte"
					onChange={handleChange}
					value={values.salePrice_gte}
					className={classes.filter}
				/>
				<TextField
					name="salePrice_lte"
					onChange={handleChange}
					value={values.salePrice_lte}
					className={classes.filter}
				/>
			</Box>
			<Button variant="outlined" color="primary" onClick={handleSubmit} size="small">
				Áp dụng
			</Button>
		</Box>
	)
}

export default FilterByPrice
