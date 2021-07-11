import axiosClient from './axiosClient'

const products = '/products'
const productApi = {
   getAll(params) {
      const url = products
      return axiosClient.get(url, { params })
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
