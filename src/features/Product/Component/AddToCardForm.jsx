import { yupResolver } from '@hookform/resolvers/yup'
import { Button, makeStyles } from '@material-ui/core'
import QuantityField from 'components/Form-control/QuantityField'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const useStyle = makeStyles((theme) => ({
	root: {},
	inputQuantityField: {
		marginLeft: theme.spacing(2),
	},
}))
const schema = yup.object().shape({
	Quantity: yup
		.number()
		.required()
		.min(1, 'Mininum value is 1')
		.typeError('Please insert quantity'),
})
function Quantity({ onSubmit }) {
	const classes = useStyle()
	const form = useForm({
		defaultValues: {
			Quantity: 1,
		},
		resolver: yupResolver(schema),
	})
	const handleSubmit = (values) => {
		onSubmit(values)
	}

	return (
		<div className={classes.root}>
			<form
				onSubmit={form.handleSubmit(handleSubmit)}
				className={classes.inputQuantityField}
				noValidate
			>
				<QuantityField form={form} name="Quantity" />

				<Button
					variant="contained"
					color="primary"
					className={classes.registerBtn}
					type="submit"
				>
					Mua Hàng
				</Button>
			</form>
		</div>
	)
}

export default Quantity
