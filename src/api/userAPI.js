import axiosClient from './axiosClient'

const userAPI = {
	register(data) {
		return axiosClient.post('auth/local/register', data)
	},
	login(data) {
		return axiosClient.post('auth/local', data)
	},
}

export default userAPI
