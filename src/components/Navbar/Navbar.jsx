import { Box, Grid, IconButton, Menu, MenuItem } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded'
import Login from 'features/Auth/component/Login'
import Register from 'features/Auth/component/Register'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CancelIcon from '@material-ui/icons/Cancel'
import { useDispatch, useSelector } from 'react-redux'
import { AccountCircle } from '@material-ui/icons'
import { logout } from 'features/Auth/authSlice'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		boxSizing: 'boder-box',
		position: 'relatve',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {},
	link: {
		textDecoration: 'none',
		color: '#fff',
		display: 'flex',
		flex: 1,
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
}))
const auth = {
	login: 'login',
	register: 'register',
}
export default function NavBar() {
	const [open, setOpen] = useState(false)
	const [mode, setMode] = useState(auth.login)
	const handleClickOpenRegister = () => {
		setOpen(true)
		setMode(auth.register)
	}
	const handleClickOpenLogin = () => {
		setOpen(true)
		setMode(auth.login)
	}
	const handleClose = () => {
		setOpen(false)
	}
	const classes = useStyles()
	const loggerUser = useSelector((state) => state.userReducer.current)
	const isLogging = !!loggerUser?.id
	const [anchorEl, setAnchorEl] = useState(null)
	const dispatch = useDispatch()
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleCloseMenu = () => {
		setAnchorEl(null)
	}
	const handleLogout = () => {
		const action = logout()
		dispatch(action)
		setAnchorEl(null)
	}
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<NavLink className={classes.link} to="/">
						<StorefrontRoundedIcon className={classes.menuButton} />
						<Typography variant="h5" className={classes.title}>
							EZ SHOP
						</Typography>
					</NavLink>

					<NavLink className={classes.linkItem} to="/todos">
						<Button color="inherit">Todo</Button>
					</NavLink>
					<NavLink className={classes.linkItem} to="/products">
						<Button color="inherit">Products</Button>
					</NavLink>
					{!isLogging && (
						<>
							<Button color="inherit" onClick={handleClickOpenRegister}>
								Register
							</Button>
							<Grid>/</Grid>
							<Button color="inherit" onClick={handleClickOpenLogin}>
								Login
							</Button>
						</>
					)}
					{!!isLogging && (
						<>
							<IconButton color="inherit" aria-haspopup="true" onClick={handleClick}>
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
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleCloseMenu}
							>
								<MenuItem onClick={handleCloseMenu}>My account</MenuItem>
								<MenuItem onClick={handleLogout}>Logout</MenuItem>
							</Menu>
						</>
					)}
				</Toolbar>
			</AppBar>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
				disableEscapeKeyDown
			>
				<DialogActions className={classes.cancelIcon}>
					<Button onClick={handleClose} color="secondary">
						<CancelIcon />
					</Button>
				</DialogActions>
				{mode === auth.register && (
					<>
						<Register handleClose={handleClose} />
						<Box textAlign="center" component="div">
							<Button
								color="primary"
								className={classes.toggleBtn}
								onClick={() => setMode(auth.login)}
							>
								Already have an account, Login here
							</Button>
						</Box>
					</>
				)}
				{mode === auth.login && (
					<>
						<Login handleClose={handleClose} />
						<Box textAlign="center" component="div">
							<Button
								color="primary"
								className={classes.toggleBtn}
								onClick={() => setMode(auth.register)}
							>
								Don't have an account, register here
							</Button>
						</Box>
					</>
				)}
			</Dialog>
		</div>
	)
}
