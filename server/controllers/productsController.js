const Product = require('../models/productsModel')

const getProducts = async (req, res) => {
	try {
		const products = await Product.find(req.query)
		if (products.length) {
			res.status(200).json(products)
		} else {
			res.status(404).json(`No category`)
		}
	} catch (error) {
		res.status(500).json({ msg: error.message })
	}
}

const getProduct = async (req, res) => {
	try {
		const { slug } = req.params
		const product = await Product.findOne({ slug: slug })
		if (!product) res.status(404).json(`No product with slug: ${slug}`)
		res.status(200).json(product)
	} catch (error) {
		console.log(error)
	}
}

module.exports = { getProducts, getProduct }

