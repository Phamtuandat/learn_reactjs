import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../authSlice'
import RegisterForm from '../RegisterForm'

function Register(props) {
	const { handleClose } = props
	const { enqueueSnackbar } = useSnackbar()
	const dispatch = useDispatch()
	const handleSubmit = async (value) => {
		try {
			value.username = value.email
			const action = register(value)
			const resultAction = await dispatch(action)
			unwrapResult(resultAction)
			enqueueSnackbar('Register Successfully!! ', { variant: 'success' })
			handleClose()
		} catch (error) {
			enqueueSnackbar(`${error.message}`, { variant: 'error' })
		}
	}
	return (
		<div>
			<RegisterForm handleSubmit={handleSubmit} />
		</div>
	)
}

export default Register
