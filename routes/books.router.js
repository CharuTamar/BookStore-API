const express = require('express');
const bookController = require('../controllers/book.controller');

const router = express.Router();


/**
 * App Routes 
*/
router.post('/', bookController.addBook)
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;