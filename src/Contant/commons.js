export const STATIC_HOST = 'https://api.ezfrontend.com'
export const THUMBNAIL_PLACEHOLDER = function (categoryId) {
	if (!categoryId) return
	else if (categoryId === 1) {
		const randomNumber = Math.floor(Math.random() * placeholderFashions.length)
		return placeholderFashions[randomNumber]
	} else if (categoryId === 4) {
		const randomNumber = Math.floor(Math.random() * placeholderMacBook.length)
		return placeholderMacBook[randomNumber]
	} else if (categoryId === 3) {
		const randomNumber = Math.floor(Math.random() * placeholderMakeUp.length)
		return placeholderMakeUp[randomNumber]
	} else if (categoryId === 2) {
		const randomNumber = Math.floor(Math.random() * maskPlaceholder.length)
		return maskPlaceholder[randomNumber]
	} else {
		const randomNumber = Math.floor(Math.random() * elsePlaceholder.length)
		return elsePlaceholder[randomNumber]
	}
}

const placeholderMacBook = [
	'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
	'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
	'https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80',
	'https://images.unsplash.com/photo-1543652437-15ae836b33e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
]

const placeholderFashions = [
	'https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	'https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
	'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
	'https://images.unsplash.com/flagged/photo-1559502867-c406bd78ff24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80',
	'https://images.unsplash.com/photo-1561357747-a5ebd644c2d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
]
const placeholderMakeUp = [
	'https://images.unsplash.com/photo-1611756468665-09dd5ed49091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	'https://images.unsplash.com/photo-1611756468043-60b953471279?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	'https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80',
	'https://images.unsplash.com/photo-1616723355545-95f2f2abb4d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
]
const maskPlaceholder = [
	'https://images.unsplash.com/photo-1601057956918-acb8d894b1cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	'https://images.unsplash.com/photo-1601058612202-63817adfbac4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	'https://images.unsplash.com/photo-1601057943570-ec0e0dc830bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	'https://images.unsplash.com/photo-1598207951491-255eaf139751?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	'https://images.unsplash.com/photo-1611646231052-cefd85fa501b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
]

const elsePlaceholder = [
	'https://images.unsplash.com/photo-1529338296731-c4280a44fc48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
	'https://images.unsplash.com/photo-1593687395549-400945fed803?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
	'https://images.unsplash.com/photo-1598894896802-f9465e6a58ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
]
