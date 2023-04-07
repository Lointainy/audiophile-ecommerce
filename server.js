const express = require('express')

const fs = require('fs')
const path = require('path')

const cors = require('cors')

const dotenv = require('dotenv').config()
const connectDB = require('./config/connectDB')
const productsRoutes = require('./routes/productsRoute')

/* Initial App */
const app = express()
const PORT = process.env.PORT || 3000

/* Cors */

app.use(
	cors({
		methods: '*',
		origin: ['http://localhost:5173', 'http://192.168.0.100:5173', 'https://audiophile-ecommerce-react-lointainy.netlify.app']
	})
)

/* Middleware */
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', productsRoutes)

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'))
})

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

