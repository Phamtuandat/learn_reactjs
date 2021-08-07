import { Box, Button, Fade, IconButton, Link, makeStyles, Slide } from '@material-ui/core'
import { panelList } from 'image'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Slider from 'react-slick'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(4),
		outline: 'none',
		position: 'relative',
		backgroundColor: '#f7f8f9',
		[theme.breakpoints.down('xs')]: {
			display: 'flex !important',
			flexFlow: 'column-reverse',
		},
	},
	dot: {
		top: -30,
		color: 'transparent',
		[theme.breakpoints.down('xs')]: {
			position: 'absolute',
			bottom: -10,
		},
	},
	img: {
		width: '100%',
		objectFit: 'cover',
	},
	btn: {
		transition: theme.transitions.create(['background-color'], {
			duration: theme.transitions.duration.short,
		}),
		'&:hover': {
			textDecoration: 'none',
			backgroundColor: 'black',
			color: 'white',
			border: 'none',
		},
		padding: '15px 60px 15px 60px',
		color: 'white',
		boxShadow: theme.shadows[2],
		fontSize: '16px',
		borderRadius: 0,
		[theme.breakpoints.down('xs')]: {
			padding: '10px 40px 10px 40px',
			backgroundColor: 'transparent',
			color: 'black',
		},
	},
	contentBox: {
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		top: '45%',
		left: '50%',
		transform: 'translateX(-50%)',
		[theme.breakpoints.down('xs')]: {
			position: 'relative',
			bottom: 0,
		},
		margin: '12px 0',
	},

	content: {
		fontSize: theme.typography.h3.fontSize,
		color: 'white',
		marginBottom: '18px',
		[theme.breakpoints.down('sm')]: {
			fontSize: theme.typography.h5.fontSize,
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.h6.fontSize,
			marginBottom: 6,
			color: 'black',
			display: 'flex',
			justifyContent: 'center',
		},
	},
	linkShop: {
		display: 'flex',
		justifyContent: 'center',
	},
	linkBtn: {
		'&:hover': {
			textDecoration: 'none',
		},
	},
	nextArrow: {
		width: 'fit-content',
		transform: 'rotate(180deg)',
		position: 'absolute',
		top: '50%',
		right: 24,
		'&>button': {
			color: '#ccc',
			transform: 'scale(1.5)',
		},
	},
	prevArrow: {
		width: 'fit-content',
		position: 'absolute',
		top: '50%',
		left: 24,
		zIndex: 1,
		'&>button': {
			color: '#ccc',
			transform: 'scale(1.5)',
		},
	},
}))
function Slick() {
	const [state, setState] = useState(true)
	const [onHover, setOnHover] = useState(false)

	const classes = useStyles()

	// custom nextArrow and prevArrow
	const SampleNextArrow = ({ onClick, style }) => {
		return (
			<div className={classes.nextArrow} onClick={onClick} style={{ ...style }}>
				<IconButton>{onHover && <ArrowBackIosIcon />}</IconButton>
			</div>
		)
	}
	const SamplePrevArrow = ({ onClick, style }) => {
		return (
			<div className={classes.prevArrow} onClick={onClick} style={{ ...style }}>
				<IconButton>{onHover && <ArrowBackIosIcon />}</IconButton>
			</div>
		)
	}
	const settings = {
		customPaging: function (i) {
			return (
				<div className={classes.dot}>
					<span>.</span>
				</div>
			)
		},
		dots: true,
		dotsClass: 'slick-dots slick-thumb',
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		autoplaySpeed: 4000,
		cssEase: 'linear',
		beforeChange: () => setState(false),
		afterChange: () => setState(true),
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	}

	return (
		<div onMouseOver={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
			<Slider {...settings}>
				{panelList.map((img, i) => (
					<div key={i} className={classes.root}>
						<Box className={classes.contentBox}>
							<Box className={classes.content}>
								<Slide direction="up" timeout={{ enter: 1000 }} in={state}>
									<Box>
										<Fade
											disableStrictModeCompat
											in={state}
											timeout={{ enter: 2000, exit: 0 }}
										>
											<Box component="span">SALE UP TO 20%</Box>
										</Fade>
									</Box>
								</Slide>
							</Box>
							<Box className={classes.linkShop}>
								<Slide direction="up" in={state} timeout={{ enter: 1750 }}>
									<Box>
										<Fade
											disableStrictModeCompat
											in={state}
											timeout={{ enter: 3000, exit: 0 }}
										>
											<Link
												component={NavLink}
												to="/products"
												className={classes.linkBtn}
											>
												<Button
													variant="outlined"
													className={classes.btn}
													color="inherit"
												>
													Mua ngay
												</Button>
											</Link>
										</Fade>
									</Box>
								</Slide>
							</Box>
						</Box>
						<img src={img} alt={img} className={classes.img} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Slick
