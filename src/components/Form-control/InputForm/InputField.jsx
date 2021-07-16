import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form'

function InputField({ form, disabled, name, label }) {
	const {
		formState: { errors },
	} = form
	return (
		<Controller
			name={name}
			control={form.control}
			disabled={disabled}
			render={({ field }) => (
				<TextField
					error={errors[name] ? true : false}
					helperText={errors[name] ? errors[name].message : ''}
					{...field}
					fullWidth
					variant="outlined"
					label={label}
					color="primary"
					margin="normal"
				/>
			)}
		></Controller>
	)
}

InputField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,

	label: PropTypes.string,
	disabled: PropTypes.bool,
}

export default InputField
