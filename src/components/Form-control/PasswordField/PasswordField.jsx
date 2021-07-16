import { IconButton, TextField } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'

function PasswordField({ form, disabled, name, label }) {
	const [showPassword, setShowPassword] = useState(false)
	const handleToggle = () => {
		setShowPassword((showPassword) => !showPassword)
	}
	const {
		formState: { errors },
	} = form

	return (
		<Controller
			name={name}
			control={form.control}
			disabled={disabled}
			label={label}
			render={({ field }) => (
				<TextField
					margin="normal"
					error={errors[name] ? true : false}
					id={name}
					helperText={errors[name] ? errors[name].message : ''}
					label={label}
					{...field}
					fullWidth
					variant="outlined"
					color="primary"
					type={showPassword ? 'text' : 'password'}
					InputProps={{
						...field.InputProps,
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									edge="end"
									onClick={handleToggle}
								>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						),
					}}
				></TextField>
			)}
		></Controller>
	)
}

PasswordField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,

	label: PropTypes.string,
	disabled: PropTypes.bool,
}

export default PasswordField
