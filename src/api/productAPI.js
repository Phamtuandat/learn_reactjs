import axiosClient from './axiosClient'

const products = '/products'
const productApi = {
	async getAll(params) {
		const url = products
		const newParams = { ...params }
		if (!newParams._start) {
			newParams._start =
				!newParams._page || newParams._page <= 1
					? 0
					: (newParams._page - 1) * newParams._limit || 12
			delete newParams._page
			const productsList = await axiosClient.get(url, { params: newParams })
			const count = await axiosClient.get(`${url}/count`, { params: newParams })

			return {
				data: productsList.data,
				pagination: {
					page: params._page,
					limit: params._limit,
					total: count,
				},
			}
		} else {
			delete newParams._page
			const productsList = await axiosClient.get(url, { params: newParams })
			const count = await axiosClient.get(`${url}/count`, { params: newParams })
			return {
				data: productsList.data,
				pagination: {
					page: params._page,
					limit: params._limit,
					total: count,
				},
			}
		}
	},
	get(id) {
		const url = `${products}/${id}`
		return axiosClient.get(url)
	},
	add(data) {
		const url = products
		return axiosClient.post(url, data)
	},
	remove(id) {
		const url = `${products}/${id}`
		return axiosClient.delete(url)
	},
	update(data) {
		const url = `${products}/${data.id}`
		return axiosClient.patch(url, data)
	},
}

export default productApi
