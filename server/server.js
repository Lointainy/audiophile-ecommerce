const express = require('express')

const fs = require('fs')
const path = require('path')

const cors = require('cors')

const dotenv = require('dotenv').config()
const connectDB = require('./config/connectDB')
const productsRoutes = require('./routes/productsRoute')

const swaggerUI = require('swagger-ui-express')

const swaggerDoc = require('./doc/documentation')

/* Initial App */
const app = express()
const PORT = process.env.PORT || 3000

// CDN CSS Swagger

const CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css'

const options = {
	customCss: '.swagger-ui .topbar { display: none}',
	customSiteTitle: 'Audio[Ecom] API',
	customSiteFavicon: '',
	customCssUrl: CSS_URL
}

// Home page
app.get('/', (req, res) => {
	res.redirect('/docs')
})

/* Swagger UI */
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc, options))

/* Cors */

app.use(
	cors({
		methods: '*'
		// origin: ['http://localhost:5173', 'http://192.168.0.100:5173', 'https://audiophile-ecommerce-react-lointainy.netlify.app']
	})
)

/* Middleware */
app.use((req, res, next) => {
	res.header('Content-Type', 'application/json')
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
	next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', productsRoutes)

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/index.html'))
// })

const startServer = async () => {
	try {
		await connectDB()
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`)
		})
	} catch (error) {
		console.log(error)
	}
}

startServer()

