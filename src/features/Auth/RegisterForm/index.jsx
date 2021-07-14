import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import InputField from 'components/Form-control/InputForm/InputField'
import { Avatar, Typography } from '@material-ui/core'

function RegisterForm(props) {
	const schema = yup.object().shape({
		title: yup.string().required('Địt mẹ mày nhập vào').min(6, 'ngắn quá bạn ơi'),
	})
	const form = useForm({
		defaultValues: {
			title: '',
		},
		resolver: yupResolver(schema),
	})
	const handleSubmit = (values) => {
		console.log(values)
	}
	return (
		<div>
			<Avatar></Avatar>
			<Typography variant="h6" component="h5">
				Create An Account
			</Typography>
			<form onSubmit={form.handleSubmit(handleSubmit)}>
				<InputField form={form} name="fullName" label="Full Name" />
				<InputField form={form} name="email" label="Email" />
				<InputField form={form} name="password" label="Password" />
				<InputField form={form} name="retyPassword" label="Retype Password" />
			</form>
		</div>
	)
}

RegisterForm.propTypes = {
	onSubmit: PropTypes.func,
}

export default RegisterForm
