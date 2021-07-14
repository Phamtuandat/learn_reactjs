import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import InputField from 'components/Form-control/InputForm/InputField'

function TodoForm(props) {
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
		<form onSubmit={form.handleSubmit(handleSubmit)}>
			<InputField form={form} name="title" label="todo" />
		</form>
	)
}

TodoForm.propTypes = {
	onSubmit: PropTypes.func,
}

export default TodoForm
