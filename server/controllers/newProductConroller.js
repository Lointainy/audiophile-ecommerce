const NewProduct = require('../models/newProduct')

const getNewProduct = async (req, res) => {
	try {
		const product = await NewProduct.findOne()
		res.status(200).json(product)
	} catch (error) {
		res.status(500).json({ msg: error.message })
	}
}

module.exports = { getNewProduct }

