import axiosClient from './axiosClient'

const userApi = 'auth/local/register'
const userAPI = {
	register(data) {
		return axiosClient.post(userApi, data)
	},
}

export default userAPI
