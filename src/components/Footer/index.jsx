import { Box, Grid } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import { Copyright } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(6),
		display: 'flex',
		flexDirection: 'column',
		fontsize: '12px',
	},
	main: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(2),
	},
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
	},
	list: {
		listStyleType: 'none',
		padding: 0,
		margin: 0,
		'&>li': {
			color: grey[700],
		},
		marginTop: 12,
	},
	title: {
		marginBottom: theme.spacing(2),
	},
}))

export default function Footer() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<CssBaseline />
			<footer className={classes.footer}>
				<Container fixed>
					<Grid container spacing={2}>
						<Grid item lg={3} md={6} xs={12}>
							<Box component="span" className={classes.title}>
								Về chúng tôi
							</Box>
							<Box component="ul" className={classes.list}>
								<li>Giới thiệu</li>
								<li>Tuyển dụng</li>
								<li>Chính sách bảo mật và thanh toán</li>
								<li>Chính sách bảo mật và thanh toán</li>
								<li>Chính sách bảo mật và thanh toán</li>
								<li>Chính sách bảo mật và thanh toán</li>
							</Box>
						</Grid>
						<Grid item lg={3} md={6} xs={12}>
							<Box component="span" className={classes.title}>
								Về chúng tôi
							</Box>
							<Box component="ul" className={classes.list}>
								<li>Giới thiệu</li>
								<li>Tuyển dụng</li>
								<li>Chính sách bảo mật và thanh toán</li>
								<li>Chính sách bảo mật và thanh toán</li>
								<li>Chính sách bảo mật và thanh toán</li>
								<li>Chính sách bảo mật và thanh toán</li>
							</Box>
						</Grid>
						<Grid item lg={3} md={6} xs={12}>
							<Box component="span" className={classes.title}>
								Về chúng tôi
							</Box>
							<Box component="ul" className={classes.list}>
								<li>Giới thiệu</li>
								<li>Tuyển dụng</li>
								<li>Chính sách bảo mật và thanh toán</li>
								<li>Chính sách bảo mật và thanh toán</li>
								<li>Chính sách bảo mật và thanh toán</li>
								<li>Chính sách bảo mật và thanh toán</li>
							</Box>
						</Grid>
						<Grid item lg={3} md={6} xs={12}>
							<Box component="span" className={classes.title}>
								Về chúng tôi
							</Box>
							<Box component="ul" className={classes.list}>
								<li>Giới thiệu</li>
								<li>Tuyển dụng</li>
								<li>Chính sách bảo mật và thanh toán</li>
								<li>Chính sách bảo mật và thanh toán</li>
								<li>Chính sách bảo mật và thanh toán</li>
								<li>Chính sách bảo mật và thanh toán</li>
							</Box>
						</Grid>
					</Grid>
					<Copyright />
				</Container>
			</footer>
		</div>
	)
}
