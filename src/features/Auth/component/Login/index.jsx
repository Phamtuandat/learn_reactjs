import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../authSlice'
import LoginForm from '../LoginForm'

function Login(props) {
	const { handleClose } = props
	const { enqueueSnackbar } = useSnackbar()
	const dispatch = useDispatch()
	const handleSubmit = async (value) => {
		try {
			const action = login(value)
			const resultAction = await dispatch(action)
			unwrapResult(resultAction)
			handleClose()
		} catch (error) {
			enqueueSnackbar(`${error.message}`, { variant: 'error' })
		}
	}
	return (
		<div>
			<LoginForm handleSubmit={handleSubmit} />
		</div>
	)
}

export default Login
