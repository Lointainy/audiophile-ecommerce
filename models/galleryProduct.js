const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gallerySchema = new Schema({
	id: {
		type: Number
	},
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
	}
})

const Gallery = mongoose.model('gallery-product', gallerySchema)

module.exports = Gallery

