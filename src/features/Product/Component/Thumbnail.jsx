import { makeStyles } from '@material-ui/core/styles'
import { imgList } from 'image'
import PropTypes from 'prop-types'
import React from 'react'
import Slider from 'react-slick'

const useStyles = makeStyles((theme) => ({
	root: {
		magin: 0,
	},
	box: {
		height: 475,
	},
	image: {
		width: '100%',
	},
	pagination: {
		display: 'flex !important',
		listStyleType: 'none',
		marginLeft: -18,
		'&>li': {
			marginLeft: 36,
		},
	},
}))

function Thumbnail({ product, isLoading }) {
	const classes = useStyles()

	const settings = {
		dots: true,
		dotsClass: classes.pagination,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		customPaging: (i) => (
			<div
				style={{
					width: '30px',
				}}
			>
				<img
					src={imgList[i]}
					alt={imgList[i]}
					style={{
						width: '60px',
						height: '60px',
						objectFit: 'contain',
						borderRadius: '4px',
					}}
				/>
			</div>
		),
	}

	return (
		<Slider {...settings}>
			{imgList.map((img) => (
				<div key={product.name} className={classes.box}>
					<img src={img} alt={product.name} className={classes.image} />
				</div>
			))}
		</Slider>
	)
}

Thumbnail.propTypes = {
	product: PropTypes.object,
	isLoading: PropTypes.bool,
}

export default Thumbnail
