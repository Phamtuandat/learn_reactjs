import React from 'react'
import RegisterForm from '../RegisterForm'

function Register() {
	const handleSubmit = (value) => {
		console.log(value)
	}
	return (
		<div>
			<RegisterForm handleSubmit={handleSubmit} />
		</div>
	)
}

export default Register
