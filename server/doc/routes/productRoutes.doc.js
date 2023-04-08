const getProducts = {
	summary: 'Returns the list of all the products',
	tags: ['Product'],
	parameters: [
		{
			name: 'category',
			in: 'query',
			description: 'filtered products by category',
			type: 'string',
			required: false,
			explode: true,
			default: '',
			schema: {
				type: 'array',
				items: {
					type: 'string',
					default: 'earphones'
				}
			}
		}
	],
	responses: {
		200: {
			description: 'The list of products',
			content: {
				'application/json': {
					schema: {
						type: 'array',
						items: {
							$ref: '#/components/schemas/Product'
						}
					},
					example: '[{product data}, {product data}]'
				}
			}
		},
		404: {
			description: 'No category'
		},
		500: {
			description: 'Error message'
		}
	}
}

const getProductBySlug = {
	tags: ['Product'],
	summary: 'Returns the product by slug',
	parameters: [
		{
			name: 'slug',
			in: 'path',
			description: 'slug of the product',
			type: 'string',
			example: 'yx1-earphones',
			required: true,
			schema: {
				type: 'string'
			}
		}
	],
	responses: {
		200: {
			description: 'Single product by their slug',
			content: {
				'application/json': {
					schema: {
						$ref: '#/components/schemas/Product'
					},
					example: '{product data}'
				}
			}
		}
	}
}

const productRouteDoc = {
	'/products': {
		get: getProducts
	},
	'/products/{slug}': {
		get: getProductBySlug
	}
}

module.exports = productRouteDoc

