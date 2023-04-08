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

const productSchema = {
	type: 'object',
	properties: {
		_id: {
			type: 'string',
			example: '63dff8dd760d9e5f6ce72c15'
		},
		id: {
			type: 'number',
			example: '1'
		},
		slug: {
			type: 'string',
			example: 'yx1-earphones'
		},
		name: {
			type: 'string',
			example: 'YX1 Wireless Earphones'
		},
		image: {
			type: 'object',
			properties: imageType
		},
		category: {
			type: 'string',
			example: 'earphones'
		},
		categoryImage: {
			type: 'object',
			properties: imageType
		},
		new: {
			type: 'boolean'
		},
		price: {
			type: 'number',
			example: '599'
		},
		description: {
			type: 'string',
			example: 'Tailor your listening ex…'
		},
		features: {
			type: 'string',
			example: 'Experience unrivalled st…'
		},
		includes: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
						example: '63dff8dd760d9e5f6ce72c15'
					},
					quantity: {
						type: 'number'
					},
					item: {
						type: 'string'
					}
				}
			}
		},
		gallery: {
			type: 'object',
			properties: {
				first: {
					type: 'object',
					properties: imageType
				},
				second: {
					type: 'object',
					properties: imageType
				},
				third: {
					type: 'object',
					properties: imageType
				}
			}
		},
		others: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
						example: '63dff8dd760d9e5f6ce72c15'
					},
					slug: {
						type: 'number',
						example: 'xx99-mark-one-headphones'
					},
					name: {
						type: 'string',
						example: 'XX99 Mark I'
					},
					image: {
						type: 'object',
						properties: imageType
					}
				}
			}
		}
	}
}

module.exports = productSchema

