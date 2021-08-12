import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, makeStyles } from '@material-ui/core'
import Product from './Product'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	btn: {
		margin: 40,
		width: '30%',
	},
}))
function TopSale({ productList = [] }) {
	const classes = useStyles()

	const [state, setState] = useState(3)

	let newProductList = []
	if (state <= productList.length) {
		for (let i = 0; i <= state; i++) {
			newProductList = [...newProductList, productList[i]]
		}
	}
	const handleLoadMore = () => {
		if (state <= productList.length - 4) {
			setState(state + 4)
		} else {
			return null
		}
	}
	return (
		<div className={classes.root}>
			<Grid container>
				{newProductList.map((product, index) => (
					<Grid item key={product?.id} lg={3} md={4} sm={4} xs={6}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
			<Button
				variant="outlined"
				color="default"
				onClick={handleLoadMore}
				size="small"
				className={classes.btn}
				disabled={state >= productList.length - 4 ? true : false}
			>
				Xem thêm
			</Button>
		</div>
	)
}

TopSale.propTypes = {
	productList: PropTypes.array,
}

export default TopSale
