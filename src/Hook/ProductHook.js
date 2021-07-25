import productApi from 'api/productAPI'
import { useEffect, useState } from 'react'

export default function ProductIdHook(productId) {
	const [product, setProduct] = useState({})
	const [isLoading, setIsloading] = useState(false)
	useEffect(() => {
		;(async () => {
			setIsloading(true)
			try {
				const result = await productApi.get(productId)
				setProduct(result.data)
			} catch {
				console.log('error')
			}
		})()
		setTimeout(() => setIsloading(false), 1000)

		return clearTimeout()
	}, [productId])
	return { product, isLoading }
}
