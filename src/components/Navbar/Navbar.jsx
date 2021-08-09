import { Badge, Box, Drawer, Hidden, IconButton, Link, Slide, withWidth } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import { grey } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { logout } from 'features/Auth/authSlice'
import { countItems } from 'features/Cart/CartSelector'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ReponsiveAppBar from './ReponsiveAppBar'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		boxSizing: 'boder-box',

		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
	},

	menuButton: {
		marginRight: theme.spacing(2),
	},
	logo: {
		marginLeft: 'auto',
		[theme.breakpoints.down('sm')]: {
			width: 150,
		},
	},
	logoBox: {
		// [theme.breakpoints.down('sm')]: {
		// },
	},
	link: {
		textDecoration: 'none',
		color: '#fff',
		alignSelf: 'center',
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
		color: grey[700],
	},
	home: {
		display: 'flex',
		justifyContent: 'space-between',
	},

	userBox: {
		display: 'flex',
	},
	shopIcon: {
		alignSelf: 'center',
		fontSize: '32px',
		marginRight: 20,
	},
	AppBar: {
		backgroundColor: '#FFFFFF',
	},
}))

function NavBar(props) {
	const classes = useStyles()

	const [state, setState] = useState({
		openNav: false,
		open: false,
		hiddenNavBar: true,
	})
	const handleOpen = (value) => {
		setState((prevState) => ({
			...prevState,
			...value,
		}))
	}

	const loggerUser = useSelector((state) => state.userReducer.current)
	const isLogging = !!loggerUser?.id
	const dispatch = useDispatch()

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
	window.onscroll = () => {
		if (window.scrollY >= 146) {
			setState((prevState) => ({
				...prevState,
				hiddenNavBar: false,
			}))
		} else {
			setState((prevState) => ({
				...prevState,
				hiddenNavBar: true,
			}))
		}
	}
	const toggleDrawer = () => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return
		}

		handleOpen({ openNav: false })
	}
	const count = useSelector(countItems)
	return (
		<div className={classes.root}>
			<Slide direction="down" in={!state.hiddenNavBar}>
				<AppBar className={classes.AppBar} position="fixed">
					<Toolbar className={classes.home}>
						<Hidden mdUp>
							<Box className={classes.menuIcon}>
								<NavLink className={classes.link} to="/products">
									<IconButton onClick={() => handleOpen({ openNav: true })}>
										<MenuIcon />
									</IconButton>
								</NavLink>
							</Box>
						</Hidden>
						<Link component={NavLink} to="/products" className={classes.logoBox}>
							<img
								className={classes.logo}
								src="https://cdn11.bigcommerce.com/s-wek9ye9/images/stencil/280x30/logo_1513222786__03534.original.png"
								alt="brooklynk"
							/>
						</Link>

						<IconButton aria-label="show 11 new notifications" color="inherit">
							<Badge badgeContent={count} color="secondary">
								<NavLink to="/cart" className={classes.cartLink}>
									<ShoppingCartOutlinedIcon />
								</NavLink>
							</Badge>
						</IconButton>
					</Toolbar>
				</AppBar>
			</Slide>
			<Drawer open={state.openNav} onClose={toggleDrawer(false)}>
				<ReponsiveAppBar
					handleClick={handleOpen}
					isLogging={isLogging}
					handleLogout={handleLogout}
				/>
			</Drawer>
		</div>
	)
}
NavBar.propTypes = {
	width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}
export default withWidth()(NavBar)
