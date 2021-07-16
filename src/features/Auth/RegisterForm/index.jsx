import { yupResolver } from '@hookform/resolvers/yup'
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock'
import InputField from 'components/Form-control/InputForm/InputField'
import PasswordField from 'components/Form-control/PasswordField/PasswordField'
import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const useStyle = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(4),
	},
	avatar: {
		margin: '0 auto',
		backgroundColor: theme.palette.secondary.main,
	},
	header: {
		textAlign: 'center',
		margin: theme.spacing(3, 0, 2, 0),
	},
	registerForm: {},
	registerBtn: {
		margin: theme.spacing(3, 0, 0, 0),
	},
	isSubmitting: {
		margin: theme.spacing(0, 0, 5, 0),
	},
}))
const schema = yup.object().shape({
	fullName: yup
		.string()
		.matches(/^[A-Za-z ]*$/, 'Please enter valid name')
		.max(40)
		.required()
		.test('should has at least two words', 'Please enter at least two words', (value) => {
			return value.split(' ').length >= 2
		}),
	email: yup.string().email('Invalid email').required('Required'),
	password: yup
		.string()
		.required('No password provided.')
		.min(8, 'Password is too short - should be 8 chars minimum.')
		.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
	passwordConfirm: yup
		.string()
		.label('Password Confirm')
		.required()
		.oneOf([yup.ref('password')], 'Passwords does not match'),
})
function RegisterForm(props) {
	const classes = useStyle()
	const form = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			passwordConfirm: '',
		},
		resolver: yupResolver(schema),
	})
	const handleSubmit = async (values) => {
		const { handleSubmit } = props
		if (handleSubmit) {
			await handleSubmit(values)
		}
	}
	const { isSubmitting } = form.formState
	return (
		<div className={classes.root}>
			{isSubmitting && <LinearProgress className={classes.isSubmitting} />}
			<Avatar className={classes.avatar}>
				<LockIcon />
			</Avatar>
			<Typography variant="h6" component="h5" className={classes.header}>
				Create An Account
			</Typography>
			<form onSubmit={form.handleSubmit(handleSubmit)} className={classes.RegisterForm} noValidate>
				<InputField form={form} name="fullName" label="Full Name" />
				<InputField form={form} name="email" label="Email" />
				<PasswordField form={form} name="password" label="Password" />
				<PasswordField form={form} name="passwordConfirm" label="Password Confirm" />
				<Button
					disabled={isSubmitting}
					variant="contained"
					color="primary"
					fullWidth
					className={classes.registerBtn}
					type="submit"
				>
					Đăng ký
				</Button>
			</form>
		</div>
	)
}

RegisterForm.propTypes = {
	onSubmit: PropTypes.func,
}

export default RegisterForm
