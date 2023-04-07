const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
	id: {
		type: Number || String
	},
	slug: {
		type: String
	},
	name: {
		type: String
	},
	image: {
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
	category: {
		type: String
	},
	categoryImage: {
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
	new: {
		type: Boolean
	},
	price: {
		type: Number
	},
	description: {
		type: String
	},
	features: {
		type: String
	},
	includes: [
		{
			quantity: {
				type: Number
			},
			item: {
				type: String
			}
		}
	],
	gallery: {
		first: {
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
		second: {
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
		third: {
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
	},
	others: [
		{
			slug: {
				type: String
			},
			name: {
				type: String
			},
			image: {
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
		}
	]
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product

