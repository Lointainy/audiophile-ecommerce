let imageType = {
	mobile: {
		type: 'string',
		example: 'assets/product-yx1-earph…obile/image-product.png'
	},
	desktop: {
		type: 'string',
		example: 'assets/product-yx1-earph…obile/image-product.png'
	},
	tablet: {
		type: 'string',
		example: 'assets/product-yx1-earph…obile/image-product.png'
	}
}

const newProductSchema = {
	type: 'object',
	properties: {
		slug: {
			type: 'string',
			example: 'yx1-earphones'
		},
		name: {
			type: 'string',
			example: 'YX1 Wireless Earphones'
		},
		img: {
			type: 'object',
			properties: imageType
		},
		description: {
			type: 'string',
			example: 'Upgrade to premium speakers..'
		}
	}
}

module.exports = newProductSchema

