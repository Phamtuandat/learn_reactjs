import { Box, IconButton, makeStyles, TextField, Typography } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove'
import PropTypes from 'prop-types'
import React from 'react'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import { Controller } from 'react-hook-form'

const useStyle = makeStyles((theme) => ({
	increaseBtn: {
		borderRadius: 0,
		border: '1px solid #ccc',
		width: 42.3,
		height: 42.3,
	},
	inputQuantityField: {
		width: 70,
		textAlign: 'center',
	},
	root: {
		margin: theme.spacing(2, 0, 2, 0),
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
			<Typography variant="button" display="block">
				Số lượng:
			</Typography>

			<Controller
				name={name}
				control={form.control}
				render={({ field }) => (
					<Box>
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
							type="number"
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
