import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import BurstModeIcon from '@material-ui/icons/BurstMode'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LaptopIcon from '@material-ui/icons/Laptop'
import RedditIcon from '@material-ui/icons/Reddit'
import RedeemIcon from '@material-ui/icons/Redeem'
import SmartphoneIcon from '@material-ui/icons/Smartphone'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addFilterByCategory } from './NavBarSlice'

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
})

const ICON_LIST = [
	{
		id: 1,
		component: <BurstModeIcon />,
	},
	{
		id: 2,
		component: <RedditIcon />,
	},
	{
		id: 3,
		component: <RedeemIcon />,
	},
	{
		id: 4,
		component: <LaptopIcon />,
	},
	{
		id: 5,
		component: <CreditCardIcon />,
	},
	{
		id: 6,
		component: <SmartphoneIcon />,
	},
]
export default function ReponsiveAppBar({
	handleClick = null,
	isLogging = false,
	handleLogout = null,
	categoryList = [],
}) {
	const classes = useStyles()
	const dispatch = useDispatch()
	const handleFilter = (value) => {
		const action = addFilterByCategory(value)
		dispatch(action)
	}
	return (
		<div className={classes.list} role="presentation">
			<List>
				<ListItem button>
					<ListItemIcon>
						<StorefrontOutlinedIcon />
					</ListItemIcon>
					<ListItemText primary="home" />
				</ListItem>
			</List>
			<Divider />
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Danh mục sản phẩm</Typography>
				</AccordionSummary>
				<List>
					{categoryList.map((category) => (
						<ListItem
							key={category.id}
							button
							onClick={() => handleFilter(category.id)}
						>
							<AccordionDetails>
								<ListItemIcon>
									{
										ICON_LIST.filter((item) => item.id === +category.id)[0]
											.component
									}
								</ListItemIcon>
								<ListItemText primary={category.name} />
							</AccordionDetails>
						</ListItem>
					))}
				</List>
			</Accordion>
			{!isLogging && (
				<List>
					<ListItem
						button
						onClick={() => handleClick({ openNav: false, mode: 'login', open: true })}
					>
						<ListItemIcon>
							<AccountCircleOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary="Đăng nhập" />
					</ListItem>
				</List>
			)}
			{!!isLogging && (
				<List>
					<ListItem button onClick={() => handleClick()}>
						<ListItemIcon>
							<AccountCircleOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary="Tài khoản của tôi" />
					</ListItem>
					<ListItem button onClick={handleLogout}>
						<ListItemIcon>
							<ExitToAppIcon />
						</ListItemIcon>
						<ListItemText primary="Đăng xuất" />
					</ListItem>
				</List>
			)}
		</div>
	)
}
ReponsiveAppBar.propTypes = {
	handleClick: PropTypes.func,
	isLoading: PropTypes.bool,
	handleLogout: PropTypes.func,
}
