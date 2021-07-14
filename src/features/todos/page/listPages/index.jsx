import TodoForm from 'features/todos/component/TodoForm/TodoForm'
import React from 'react'

export default function ListPage() {
	const handleSubmit = (value) => {
		console.log(value)
	}
	return (
		<div>
			<h3>Đây là todoForm</h3>
			<TodoForm onSubmit={handleSubmit} />
		</div>
	)
}
