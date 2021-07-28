import { yupResolver } from '@hookform/resolvers/yup'
import { makeStyles } from '@material-ui/core'
import QuantityField from 'components/Form-control/QuantityField'
import React, { useEffect } from 'react'
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
function CartQuantity({ quantity = 0, onChange = null }) {
	const classes = useStyle()
	const form = useForm({
		defaultValues: {
			Quantity: quantity,
		},
		resolver: yupResolver(schema),
	})
	const { watch } = form
	const watchQuantityChanges = watch('Quantity')

	useEffect(() => {
		onChange(watchQuantityChanges)
	}, [watchQuantityChanges, onChange])
	return (
		<div className={classes.root}>
			<form className={classes.inputQuantityField} noValidate>
				<QuantityField form={form} name="Quantity" />
			</form>
		</div>
	)
}

export default CartQuantity
