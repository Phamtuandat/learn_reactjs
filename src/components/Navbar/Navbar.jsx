import {
	Badge,
	Box,
	Drawer,
	Hidden,
	IconButton,
	Link,
	Menu,
	MenuItem,
	withWidth,
	useMediaQuery,
} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import { AccountCircle } from '@material-ui/icons'
import CancelIcon from '@material-ui/icons/Cancel'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded'
import categoryApi from 'api/categoryAPI'
import { logout } from 'features/Auth/authSlice'
import Login from 'features/Auth/component/Login'
import Register from 'features/Auth/component/Register'
import { countItems } from 'features/Cart/CartSelector'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import ReponsiveAppBar from './ReponsiveAppBar'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		boxSizing: 'boder-box',
	},

	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 26,
		'&:hover': {
			textDecoration: 'none',
			opacity: 0.85,
		},
	},
	link: {
		textDecoration: 'none',
		color: '#fff',
		display: 'flex',
		justifyContent: 'flex-start',
	},
	toggleBtn: {
		marginBottom: 18,
	},
	handleMenu: {
		position: 'absolute',
		top: '64',
		left: ' 1028',
	},
	linkItem: {
		textDecoration: 'none',
		color: '#fff',
		display: 'flex',
	},
	cartLink: {
		color: '#fff',
	},
	home: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	logo: {
		display: 'flex',
	},
	userBox: {
		display: 'flex',
	},
	shopIcon: {
		alignSelf: 'center',
		fontSize: '32px',
		marginRight: 20,
	},
}))
const auth = {
	login: 'login',
	register: 'register',
}
function NavBar(props) {
	const classes = useStyles()
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('sm'))
	const categoryId = useSelector((state) => state.categoryId.categoryId)

	const history = useHistory()
	const location = useLocation()
	const queryParam = useMemo(() => {
		const params = queryString.parse(location.search)
		return {
			...params,
			'category.id': params['category.id'] || null,
			_sort: params._sort || 'salePrice:ASC',
			_limit: +params._limit || 12,
			_page: +params._page || 1,
			isFreeShip: params.isFreeShip === 'true' ? true : null,
			isPromotion: params.isPromotion === 'true' ? true : null,
		}
	}, [location.search])

	const [state, setState] = useState({
		openNav: false,
		open: false,
		mode: auth.login,
		anchorEl: 0,
	})
	const handleOpen = (value) => {
		setState((prevState) => ({
			...prevState,
			...value,
		}))
	}

	const [categoryList, setCategoryList] = useState()
	useEffect(() => {
		;(async () => {
			const resp = await categoryApi.getAll()
			const categoryList = resp.data
			setCategoryList(categoryList)
		})()
	}, [])
	const loggerUser = useSelector((state) => state.userReducer.current)
	const isLogging = !!loggerUser?.id
	const dispatch = useDispatch()
	const handleClick = (event) => {
		handleOpen({
			anchorEl: event.currentTarget,
		})
	}
	const handleCloseMenu = () => {
		handleOpen({
			anchorEl: false,
		})
	}
	const handleLogout = () => {
		const action = logout()
		dispatch(action)
		handleCloseMenu()
	}
	useEffect(() => {
		if (categoryId == null) return
		const filter = {
			...queryParam,
			'category.id': categoryId !== null ? categoryId : null,
		}
		history.push({
			pathname: history.location.pathname,
			search: queryString.stringify(filter),
		})
	}, [categoryId, history, queryParam])
	const toggleDrawer = () => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return
		}

		handleOpen({ openNav: false })
	}
	const count = useSelector(countItems)
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.home}>
					<Box className={classes.logo}>
						<NavLink className={classes.link} to="/products">
							<Hidden mdUp>
								<IconButton onClick={() => handleOpen({ openNav: true })}>
									<MenuIcon />
								</IconButton>
							</Hidden>
							<Hidden only={['xs']}>
								<StorefrontRoundedIcon className={classes.shopIcon} />
							</Hidden>
						</NavLink>
						<Link component={NavLink} to="/products" className={classes.title}>
							EZ SHOP
						</Link>
					</Box>
					<Box className={classes.userBox}>
						{!isLogging && (
							<Hidden only={['xs']}>
								<Button
									color="inherit"
									onClick={() =>
										handleOpen({
											open: true,
											mode: auth.register,
										})
									}
								>
									Đăng ký
								</Button>
								<Box component="span" alignSelf="center">
									/
								</Box>
								<Button
									color="inherit"
									onClick={() =>
										handleOpen({
											open: true,
											mode: auth.login,
										})
									}
								>
									Đăng nhập
								</Button>
							</Hidden>
						)}
						{!!isLogging && (
							<Hidden xsDown>
								<IconButton
									color="inherit"
									aria-haspopup="true"
									onClick={handleClick}
								>
									<AccountCircle />
								</IconButton>
								<Menu
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'left',
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'left',
									}}
									getContentAnchorEl={null}
									id="simple-menu"
									anchorEl={state.anchorEl}
									keepMounted
									open={Boolean(state.anchorEl)}
									onClose={handleCloseMenu}
								>
									<MenuItem onClick={handleCloseMenu}>Tài khoản của tôi</MenuItem>
									<MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
								</Menu>
							</Hidden>
						)}
						<IconButton aria-label="show 11 new notifications" color="inherit">
							<Badge badgeContent={count} color="secondary">
								<NavLink to="/cart" className={classes.cartLink}>
									<ShoppingCartOutlinedIcon />
								</NavLink>
							</Badge>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>

			<Drawer open={state.openNav} onClose={toggleDrawer(false)}>
				<ReponsiveAppBar
					handleClick={handleOpen}
					isLogging={isLogging}
					handleLogout={handleLogout}
					categoryList={categoryList}
				/>
			</Drawer>

			<Dialog
				fullScreen={!matches}
				open={state.open}
				onClose={() =>
					handleOpen({
						open: false,
					})
				}
				aria-labelledby="form-dialog-title"
				disableEscapeKeyDown
			>
				<DialogActions className={classes.cancelIcon}>
					<Button
						onClick={() =>
							handleOpen({
								open: false,
							})
						}
						color="secondary"
					>
						<CancelIcon />
					</Button>
				</DialogActions>
				{state.mode === auth.register && (
					<>
						<Register
							handleClose={() =>
								handleOpen({
									open: false,
								})
							}
						/>
						<Box textAlign="center" component="div">
							<Button
								color="primary"
								className={classes.toggleBtn}
								onClick={() => handleOpen({ mode: auth.login })}
							>
								Đã có tài khoản, đăng nhập ngay!
							</Button>
						</Box>
					</>
				)}
				{state.mode === auth.login && (
					<>
						<Login handleClose={() => handleOpen({ open: false })} />
						<Box textAlign="center" component="div">
							<Button
								color="primary"
								className={classes.toggleBtn}
								onClick={() => handleOpen({ mode: auth.register })}
							>
								Bạn chưa có tài khoản, đăng ký tại đây
							</Button>
						</Box>
					</>
				)}
			</Dialog>
		</div>
	)
}
NavBar.propTypes = {
	width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}
export default withWidth()(NavBar)
