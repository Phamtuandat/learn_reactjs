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
				setIsloading(false)
			} catch {
				setIsloading(false)
				console.log('error')
			}
		})()
	}, [productId])
	return { product, isLoading }
}
