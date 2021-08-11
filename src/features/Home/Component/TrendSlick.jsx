import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import Product from './Product'
import { IconButton, makeStyles } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const useStyles = makeStyles((theme) => ({
	nextArrow: {
		width: 'fit-content',
		transform: 'rotate(180deg)',
		position: 'absolute',
		top: '50%',
		right: -50,
		'&>button': {
			color: 'black',
			transform: 'scale(1.5)',
		},
		'& button:hover': {
			backgroundColor: 'transparent',
		},
		[theme.breakpoints.down('sm')]: {
			right: 0,
			'&>button': {
				color: 'black',
				transform: 'scale(1)',
			},
		},
	},
	prevArrow: {
		width: 'fit-content',
		position: 'absolute',
		top: '50%',
		left: -50,
		zIndex: 1,
		'&>button': {
			color: 'black',
			transform: 'scale(1.5)',
		},
		'& button:hover': {
			backgroundColor: 'transparent',
		},
		[theme.breakpoints.down('sm')]: {
			left: 0,
			'&>button': {
				color: 'black',
				transform: 'scale(1)',
			},
		},
	},
}))
function TrendSlick({ productList = [] }) {
	const classes = useStyles()

	const SampleNextArrow = ({ onClick, style, currentSlide, slideCount, slidesToShow }) => {
		return (
			<div
				className={classes.nextArrow}
				onClick={currentSlide === slideCount - slidesToShow ? null : onClick}
				style={{ ...style }}
			>
				<IconButton disabled={currentSlide === slideCount - slidesToShow ? true : false}>
					<ArrowBackIosIcon />
				</IconButton>
			</div>
		)
	}
	const SamplePrevArrow = ({ onClick, style, currentSlide }) => {
		console.log(currentSlide)
		return (
			<div
				className={classes.prevArrow}
				onClick={currentSlide === 0 ? null : onClick}
				style={{ ...style }}
			>
				<IconButton disabled={currentSlide === 0 ? true : false}>
					<ArrowBackIosIcon />
				</IconButton>
			</div>
		)
	}

	const settings = {
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		nextArrow: <SampleNextArrow slidesToShow={4} />,
		prevArrow: <SamplePrevArrow slidesToShow={4} />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 0,
					nextArrow: <SampleNextArrow slidesToShow={3} />,
					prevArrow: <SamplePrevArrow slidesToShow={3} />,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 0,
					nextArrow: <SampleNextArrow slidesToShow={2} />,
					prevArrow: <SamplePrevArrow slidesToShow={2} />,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 0,
					nextArrow: <SampleNextArrow slidesToShow={2} />,
					prevArrow: <SamplePrevArrow slidesToShow={2} />,
				},
			},
		],
	}
	return (
		<div>
			<Slider {...settings}>
				{productList.map((product) => (
					<div key={product.id}>
						<Product product={product} />
					</div>
				))}
			</Slider>
		</div>
	)
}

TrendSlick.propTypes = {
	productList: PropTypes.array,
}

export default TrendSlick
