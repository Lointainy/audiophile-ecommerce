const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newProductSchema = new Schema({
	slug: {
		type: String
	},
	name: {
		type: String
	},
	description: {
		type: String
	},
	img: {
		mobile: {
			type: String
		},
		desktop: {
			type: String
		},
		tablet: {
			type: String
		}
	},
	type: Object
})

const NewProduct = mongoose.model('new-product', newProductSchema)

module.exports = NewProduct

