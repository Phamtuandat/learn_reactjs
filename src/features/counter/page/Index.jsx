import { Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CounterButton from '../Component/CounterButton'
import { decrease, increase } from '../couterSlice'

function Counter(props) {
	const dispatch = useDispatch()
	const counter = useSelector((state) => state.counter)
	return (
		<div>
			<Typography variant="h2" component="h2">
				Counter
			</Typography>
			<Typography variant="h3">{counter}</Typography>
			<CounterButton
				handleIncrease={() => dispatch(increase())}
				handleDecrease={() => dispatch(decrease())}
			/>
		</div>
	)
}

export default Counter
