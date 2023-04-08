const galleryRouteDoc = require('./routes/galleryRoutes.doc')
const newProductRouteDoc = require('./routes/newProductRoutes.doc')
const productRouteDoc = require('./routes/productRoutes.doc')

const gallerySchema = require('./schema/gallerySchema.doc')
const newProductSchema = require('./schema/newProductSchema.doc')
const productSchema = require('./schema/productSchema.doc')

const swaggerDoc = {
	openapi: '3.0.0',
	info: {
		title: 'Audio ecommerce API',
		version: '1.0.0',
		description: `#### Api for project on [frontend mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx) \n#### figma [template](https://www.figma.com/file/1Mf8Lz41DoswgHbTrqjFO1/audiophile-ecommerce-website?node-id=0%3A1&t=IUuOfmD9HkGUmBqY-1) \n#### author [contact](https://linktr.ee/lointainy) \n#### My react [project](https://audiophile-ecommerce-react-lointainy.netlify.app/)`
	},
	servers: [
		{
			url: 'https://audio-server.vercel.app/api'
		}
	],
	tags: [
		{
			name: 'Product',
			description: 'Products routes'
		},
		{
			name: 'Gallery',
			description: 'gallery of products for home page'
		},
		{
			name: 'New product',
			description: 'new product for home page'
		}
	],
	paths: {
		...productRouteDoc,
		...galleryRouteDoc,
		...newProductRouteDoc
	},
	components: {
		schemas: {
			Product: productSchema,
			Gallery: gallerySchema,
			NewProduct: newProductSchema
		}
	}
}

module.exports = swaggerDoc

