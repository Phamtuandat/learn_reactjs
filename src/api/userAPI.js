import axiosClient from './axiosClient'

const userApi = 'auth/local/register'
const authApi = {
	register(data) {
		return axiosClient.post(userApi, data)
	},
}

export default authApi
