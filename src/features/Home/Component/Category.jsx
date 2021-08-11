import { Box, CardMedia, makeStyles, Typography, Link } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		paddingBottom: 20,
		borderBottom: '4px solid #eee',
		'&:hover div:last-child': {
			opacity: 1,
		},
		color: theme.palette.text.primary,
		'&:hover': {
			textDecoration: 'none',
		},
	},
	mediaBox: {
		maxHeight: '300px',
		overflow: 'hidden',
		position: 'relative',
		'&:hover> :first-child': {
			transform: 'scale(1.1)',
		},
	},
	media: {
		height: '300px',
		transition: theme.transitions.create(['transform'], {
			duration: theme.transitions.duration.complex,
		}),
	},
	hoverColection: {
		position: 'absolute',
		opacity: 0,
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: '#00000070',
		padding: 30,
		zIndex: 1000,
		transition: theme.transitions.create(['all'], {
			duration: theme.transitions.duration.standard,
		}),
		'&::after': {
			content: '" "',
			position: 'absolute',
			top: 10,
			right: 10,
			bottom: 10,
			left: 10,
			borderRight: ' 1px solid #fff',
			borderLeft: ' 1px solid #fff',
			transform: ' scale(1,0)',
			transformOrigin: '100% 0',
			transition: theme.transitions.create(['transform'], {
				duration: theme.transitions.duration.standard,
			}),
		},
		'&:hover::after': {
			transform: 'scale(1)',
		},
		'&::before': {
			content: '""',
			position: 'absolute',
			top: 10,
			left: 10,
			right: 10,
			bottom: 10,
			transform: 'scale(0,1)',
			transformOrigin: '0 0',
			borderBottom: '1px solid #fff',
			borderTop: '1px solid #fff',
			transition: theme.transitions.create(['transform'], {
				duration: theme.transitions.duration.standard,
			}),
		},
		'&:hover::before': {
			transform: 'scale(1)',
		},
	},
	typography: {
		color: 'white',
		textAlign: 'justify',
	},
	contentBox: {
		marginTop: 20,
	},
	title: {
		color: 'white',
		position: 'absolute',
		bottom: 25,
	},
}))
function Category({ category = [], image = [] }) {
	const classes = useStyles()

	return (
		<Link component={NavLink} to="/products" className={classes.root}>
			<Box className={classes.mediaBox}>
				<CardMedia image={image} title={category.name} className={classes.media} />
				<Box className={classes.hoverColection}>
					<Typography className={classes.typography}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, nemo?
						Nobis, molestias, ullam nostrum dolorem totam nulla, obcaecati eos enim
						expedita fugiat soluta possimus sapiente reprehenderit eius omnis amet.
						Suscipit?
					</Typography>
					<Typography variant="body2" className={classes.title}>
						280 products
					</Typography>
				</Box>
			</Box>
			<Box className={classes.contentBox}>
				<Typography variant="h6">{category.name}</Typography>
			</Box>
		</Link>
	)
}

export default Category
