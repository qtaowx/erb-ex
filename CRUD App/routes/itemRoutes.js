const express = require('express');
const multer = require('multer');
const path = require('path');
const Item = require('./models/item');

const router = express.Router();
router.get('/', async (req, res) => {});

const storage = multer.diskStorage({
})

const uploadMany = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 1024},
    fileFilter: (req, file, cb) => {}
})

router.post('/', upload, async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        description: req.body.description,
        image: req.image
    });
})

router.delete('/:id', (req, res) => {})