import { Box, Grid } from '@material-ui/core'
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

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		boxSizing: 'boder-box',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	link: {
		textDecoration: 'none',
		color: '#fff',
	},
	toggleBtn: {
		marginBottom: 18,
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

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<NavLink className={classes.link} to="/">
						<StorefrontRoundedIcon className={classes.menuButton} />
					</NavLink>

					<Typography variant="h6" className={classes.title}>
						<NavLink className={classes.link} to="/">
							Hạt Shop
						</NavLink>
					</Typography>
					<NavLink className={classes.link} to="/todos">
						<Button color="inherit">Todo</Button>
					</NavLink>
					<NavLink className={classes.link} to="/counter">
						<Button color="inherit">Counter</Button>
					</NavLink>
					<Button color="inherit" onClick={handleClickOpenRegister}>
						Register
					</Button>
					<Grid>/</Grid>
					<Button color="inherit" onClick={handleClickOpenLogin}>
						Login
					</Button>
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
						<Box textAlign="center">
							<Button
								color="primary"
								className={classes.toggleBtn}
								textAlign="center"
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
						<Box textAlign="center">
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
