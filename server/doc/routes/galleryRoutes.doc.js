const getGallery = {
	summary: 'Returns the list of products gallery for home page',
	tags: ['Gallery'],
	responses: {
		200: {
			description: 'Gallery products',
			content: {
				'application/json': {
					schema: {
						type: 'array',
						items: {
							$ref: '#/components/schemas/Gallery'
						}
					},
					example: '[{product data}, {product data}]'
				}
			}
		},
		500: {
			description: 'Error message'
		}
	}
}

const galleryRouteDoc = {
	'/gallery': {
		get: getGallery
	}
}

module.exports = galleryRouteDoc

