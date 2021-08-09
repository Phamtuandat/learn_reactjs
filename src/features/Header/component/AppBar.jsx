import {
	Badge,
	Box,
	Hidden,
	IconButton,
	Menu,
	MenuItem,
	useMediaQuery,
	withWidth,
} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { grey } from '@material-ui/core/colors'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import { AccountCircle } from '@material-ui/icons'
import CancelIcon from '@material-ui/icons/Cancel'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import Login from 'features/Auth/component/Login'
import Register from 'features/Auth/component/Register'
import { countItems } from 'features/Cart/CartSelector'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		boxSizing: 'boder-box',
	},

	menuButton: {
		marginRight: theme.spacing(2),
	},
	wishListTex: {
		alignSelf: 'center',
		paddingRight: 5,
	},
	toggleBtn: {
		marginBottom: 18,
	},
	handleMenu: {
		position: 'absolute',
		top: '64',
		left: ' 1028',
	},

	cartLink: {
		display: 'flex',
		color: grey[900],
		textDecoration: 'none',
		fontSize: '12px',
		justifySelf: 'center',
	},
	home: {
		display: 'flex',
		justifyContent: 'space-between',
		minHeight: '100%',
	},
	userBox: {
		display: 'flex',
		fontSize: '12px',
	},
	AppBar: {
		backgroundColor: '#FFFFFF',
		boxShadow: 'none',
		borderBottom: '1px solid  rgb(220, 220 ,220)',
		height: 52,
	},
}))
const auth = {
	login: 'login',
	register: 'register',
}
function Appbar(props) {
	const classes = useStyles()
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('sm'))

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

	const loggerUser = useSelector((state) => state.userReducer.current)
	const isLogging = !!loggerUser?.id
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
		handleCloseMenu()
	}

	const count = useSelector(countItems)
	const wishList = useSelector((state) => state.wishListItems.wishList)
	return (
		<div className={classes.root}>
			<AppBar className={classes.AppBar} position="static">
				<Toolbar className={classes.home}>
					<Hidden mdUp>
						<IconButton onClick={() => handleOpen({ openNav: true })}>
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Box>
						{!isLogging && (
							<Hidden only={['xs']}>
								<Box className={classes.userBox}>
									<Button
										className={classes.cartLink}
										onClick={() =>
											handleOpen({
												open: true,
												mode: auth.register,
											})
										}
									>
										Đăng ký
									</Button>
									<Button
										className={classes.cartLink}
										onClick={() =>
											handleOpen({
												open: true,
												mode: auth.login,
											})
										}
									>
										Đăng nhập
									</Button>
								</Box>
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
					</Box>
					<Box>
						<IconButton aria-label="show 11 new notifications" color="inherit">
							<Badge badgeContent={wishList.length} color="secondary">
								<NavLink to="/cart" className={classes.cartLink}>
									<span className={classes.wishListTex}>WISH LIST</span>
									<FavoriteBorderIcon size="small" />
								</NavLink>
							</Badge>
						</IconButton>
						<IconButton aria-label="show 11 new notifications" color="inherit">
							<Badge badgeContent={count} color="secondary">
								<NavLink to="/cart" className={classes.cartLink}>
									<span className={classes.wishListTex}>CART LIST</span>
									<ShoppingCartOutlinedIcon size="small" />
								</NavLink>
							</Badge>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>

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
Appbar.propTypes = {
	width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}
export default withWidth()(Appbar)
