const Gallery = require('../models/galleryProduct')

const getGallery = async (req, res) => {
	try {
		const gallery = await Gallery.find()
		res.status(200).json(gallery)
	} catch (error) {
		res.status(500).json({ msg: error.message })
	}
}

module.exports = { getGallery }

