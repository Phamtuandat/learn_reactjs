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
		padding: theme.spacing(3, 6, 3, 6),
		position: 'relative',
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
		position: 'absolute',
		top: theme.spacing(1),
		left: 0,
		right: 0,
	},
}))
const schema = yup.object().shape({
	identifier: yup.string().email('Invalid email').required('Required'),
	password: yup
		.string()
		.required('No password provided.')
		.min(8, 'Password is too short - should be 8 chars minimum.')
		.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})
function LoginForm(props) {
	const classes = useStyle()
	const form = useForm({
		defaultValues: {
			identifier: '',
			password: '',
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
				Wellcome Back
			</Typography>
			<form onSubmit={form.handleSubmit(handleSubmit)} className={classes.RegisterForm} noValidate>
				<InputField form={form} name="identifier" label="Email" />
				<PasswordField form={form} name="password" label="Password" />
				<Button
					disabled={isSubmitting}
					variant="contained"
					color="primary"
					fullWidth
					className={classes.registerBtn}
					type="submit"
				>
					Sign In
				</Button>
			</form>
		</div>
	)
}

LoginForm.propTypes = {
	onSubmit: PropTypes.func,
}

export default LoginForm
