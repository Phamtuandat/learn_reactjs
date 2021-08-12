import { Box, makeStyles } from '@material-ui/core'
import categoryApi from 'api/categoryAPI'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addCategoryList } from './CategorySlice'
import AppBar from './component/AppBar'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	logo: {
		width: 320,
	},
	logoBox: {
		flexShrink: 0,
		margin: '32px',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
}))
function Header() {
	const classes = useStyles()

	const dispatch = useDispatch()

	useEffect(() => {
		try {
			;(async () => {
				const resp = await categoryApi.getAll()
				const categories = resp.data
				dispatch(addCategoryList(categories))
			})()
		} catch {
			console.log('fail to load category list')
		}
	}, [dispatch])
	return (
		<Box className={classes.root}>
			<AppBar />
			<NavLink className={classes.logoBox} to="/">
				<img
					className={classes.logo}
					src="https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/280x30/logo_1513222786__03534.original.png"
					alt="logo"
				/>
			</NavLink>
		</Box>
	)
}

export default Header
