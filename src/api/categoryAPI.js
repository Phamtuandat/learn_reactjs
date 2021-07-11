import axiosClient from './axiosClient'

const categories = '/categories'
const categoryApi = {
   getAll(params) {
      const url = categories
      return axiosClient.get(url, { params })
   },
   get(id) {
      const url = `${categories}/${id}`
      return axiosClient.get(url)
   },
   add(data) {
      const url = categories
      return axiosClient.post(url, data)
   },
   remove(id) {
      const url = `${categories}/${id}`
      return axiosClient.delete(url)
   },
   update(data) {
      const url = `${categories}/${data.id}`
      return axiosClient.patch(url, data)
   },
}

export default categoryApi
