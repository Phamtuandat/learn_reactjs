import { Box, IconButton, makeStyles, TextField } from '@material-ui/core'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import RemoveIcon from '@material-ui/icons/Remove'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'

const useStyle = makeStyles((theme) => ({
	increaseBtn: {
		borderRadius: 0,
		border: '1px solid #ccc',
		width: 27,
		height: 27,
	},
	inputQuantityField: {
		textAlign: 'center',
		'& > div ': {
			width: 50,
			height: 27,
		},
		'& > div > input': {
			padding: 0,
			textAlign: 'center',
		},
	},
	root: {
		margin: theme.spacing(2, 0, 2, 0),
	},
	formBox: {
		display: 'flex',
		width: '100%',
	},
}))
function QuantityField({ form, name }) {
	const {
		formState: { errors },
		setValue,
	} = form
	const classes = useStyle()
	return (
		<Box className={classes.root}>
			<Controller
				name={name}
				control={form.control}
				render={({ field }) => (
					<Box className={classes.formBox}>
						<IconButton
							onClick={() => setValue(name, +field.value ? +field.value - 1 : 1)}
							className={classes.increaseBtn}
							disabled={+field.value <= 1 ? true : false}
						>
							<RemoveIcon />
						</IconButton>
						<TextField
							error={errors[name] ? true : false}
							id={name}
							helperText={errors[name] ? errors[name].message : ''}
							{...field}
							variant="outlined"
							color="primary"
							size="small"
							className={classes.inputQuantityField}
						></TextField>
						<IconButton
							onClick={() => setValue(name, +field.value ? +field.value + 1 : 1)}
							className={classes.increaseBtn}
						>
							<AddOutlinedIcon />
						</IconButton>
					</Box>
				)}
			></Controller>
		</Box>
	)
}

QuantityField.propTypes = {
	form: PropTypes.object.isRequired,
}

export default QuantityField
