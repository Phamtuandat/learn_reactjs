import { createTheme } from '@material-ui/core'

export const theme = createTheme({
	transitions: {
		duration: {
			shortest: 150,
			shorter: 200,
			short: 250,
			// most basic recommended timing
			standard: 300,
			// this is to be used in complex animations
			complex: 2000,
			// recommended when something is entering screen
			enteringScreen: 225,
			// recommended when something is leaving screen
			leavingScreen: 195,
		},
	},
})
