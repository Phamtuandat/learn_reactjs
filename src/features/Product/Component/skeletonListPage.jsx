import React from 'react'
import PropTypes from 'prop-types'
import { Skeleton } from '@material-ui/lab'
import { Box, Grid } from '@material-ui/core'

function SkeletonListPage({ lenght }) {
	return (
		<Box minHeight={1212} mt={8}>
			<Grid container>
				{Array.from(new Array(lenght)).map((item, index) => {
					return (
						<Grid item key={index} xs={12} md={4} lg={3}>
							<Box padding={1}>
								<Skeleton variant="rect" width="100%" height={240} />
								<Skeleton width="100%" />
								<Skeleton width="60%" />
							</Box>
						</Grid>
					)
				})}
			</Grid>
		</Box>
	)
}
SkeletonListPage.propTypes = {
	lenght: PropTypes.number,
}
SkeletonListPage.defaultProps = {
	lenght: 12,
}

export default SkeletonListPage
