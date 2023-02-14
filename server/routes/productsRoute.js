const express = require('express')

const router = express.Router()

const { getProducts, getProduct } = require('../controllers/productsController')

const { getGallery } = require('../controllers/galleryController')

const { getNewProduct } = require('../controllers/newProductConroller')

/* Get all products */
router.get('/products', getProducts)
router.get('/products/:slug', getProduct)

/* Get gallery */
router.get('/gallery', getGallery)

/* Get New product */
router.get('/new', getNewProduct)

module.exports = router

