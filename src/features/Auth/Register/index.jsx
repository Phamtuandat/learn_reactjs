import React from 'react'
import { useDispatch } from 'react-redux'
import RegisterForm from '../RegisterForm'

function Register() {
	const dispatch = useDispatch()
	const handleSubmit = async (payload) => {
		dispatch({ type: 'register', payload })
	}
	return (
		<div>
			<RegisterForm handleSubmit={handleSubmit} />
		</div>
	)
}

export default Register
