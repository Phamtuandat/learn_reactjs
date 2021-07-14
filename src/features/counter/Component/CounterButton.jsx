import React from 'react'
import { Button, Container, Grid } from '@material-ui/core'

function CounterButton(props) {
	const { handleIncrease, handleDecrease } = props
	return (
		<Container>
			<Grid>
				<Button variant="contained" color="primary" onClick={handleIncrease}>
					Increase
				</Button>
				<Button variant="contained" color="secondary" onClick={handleDecrease}>
					Decrease
				</Button>
			</Grid>
		</Container>
	)
}

export default CounterButton
