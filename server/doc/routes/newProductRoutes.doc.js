const getNewProduct = {
	summary: 'Returns the new product ',
	tags: ['New product'],
	responses: {
		200: {
			description: 'New product',
			content: {
				'application/json': {
					schema: {
						$ref: '#/components/schemas/NewProduct'
					},
					example: '{product Data}'
				}
			}
		},
		500: {
			description: 'Error message'
		}
	}
}

const newProductRouteDoc = {
	'/new': {
		get: getNewProduct
	}
}

module.exports = newProductRouteDoc

