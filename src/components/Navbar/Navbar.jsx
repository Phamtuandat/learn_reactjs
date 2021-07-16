import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded'
import Register from 'features/Auth/Register'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
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
}))

export default function NavBar() {
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
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
					<Button color="inherit" onClick={handleClickOpen}>
						Register
					</Button>
				</Toolbar>
			</AppBar>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
				disableEscapeKeyDown
			>
				<DialogContent>
					<Register />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} variant="outlined" color="secondary">
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
