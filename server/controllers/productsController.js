const Product = require('../models/productsModel')

const getProducts = async (req, res) => {
	try {
		const products = await Product.find(req.query)
		res.status(200).json(products)
	} catch (error) {
		res.status(500).json({ msg: error.message })
	}
}

const getProduct = async (req, res) => {
	try {
		const { slug } = req.params
		const product = await Product.findOne({ slug: slug })
		if (!product) res.status(404).json(`No product with id: ${slug}`)
		res.status(200).json(product)
	} catch (error) {
		console.log(error)
	}
}

module.exports = { getProducts, getProduct }

