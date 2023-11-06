const Book = require('../models/books.model');


/**
 * POST /books
 * Add new Book 
*/
async function addBook(req, res) {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary
    });
    try {
        if(!book.title || !book.author || !book.summary) {
            return res.status(400).json({message: 'Missing required book property'})
        } else {
            let savedBook = await book.save();
            res.status(201).json({message: 'Book added successfully!', savedBook});
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

/**
 * GET /books
 * Lists all Books
*/
async function getAllBooks(req, res) {
    try {
        let books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error);
    }
}

/**
 * GET /books/:id
 * List Details of specific book by its ID 
*/
async function getBookById(req, res) {
    try {
        let bookId = req.params.id;
        let book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: `Book with id ${bookId} does not exist` });
        }
        else {
            return res.status(200).json(book);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

/**
 * PUT /books/:id
 * Update book's details 
*/
async function updateBook(req, res) {
    try {
        let bookId = req.params.id;
        let book = await Book.findByIdAndUpdate(bookId, {
            title: req.body.title,
            author: req.body.author,
            summary: req.body.summary
        });
        if (!book) {
            return res.status(404).json({ message: `Book with id ${bookId} does not exist` });
        }
        else {
            let updatedBook = await book.save();
            return res.status(200).json({ message: 'Book updated successfully!', updatedBook });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

/**
 * DELETE /books/:id
 * Delete a book 
*/
async function deleteBook(req, res) {
    try {
        let bookId = req.params.id;
        let book = await Book.findByIdAndDelete(bookId);
        if (!book) {
            return res.status(404).json({ message: `Book with id ${bookId} does not exist` });
        }
        else {
            return res.status(200).json({ message: 'Book deleted successfully!', 'Deleted book': book });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}