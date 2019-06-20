const Joi = require('joi');
const express = require('express');
const router = express.Router();
const bookService = require('../../services/bookService');
const Util = require('../../utils');
const schemas = require('./schemas');

const util = new Util();


router.get('/books', async (req, res) => {
    try {
        const books = await bookService.getAllBooks();

        if (books.length > 0) {
            util.setSuccess(200, 'ALL BOOKS', books);
        } else {
            util.setSuccess(200, 'NO BOOKS FOUND!');
        }
        return util.send(res);

    } catch (err) {
        util.setError(400, err);
        return util.send(res);
    }
});

router.post('/books', (req, res) => {
    Joi.validate(req.body, schemas.addBookSchema, async (err, value) => {
        if (err) {
            util.setError(400, err);
            return util.send(res);
        }

        try {
            const newBook = await bookService.addBook(value);

            util.setSuccess(201, 'NEW BOOK ADDED!', newBook);
            return util.send(res);

        } catch (err) {
            util.setError(400, err);
            return util.send(res);
        }
    });
});

router.get('/book/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const book = await bookService.getABook(id);

        if (book) {
            util.setSuccess(200, 'BOOK FOUND!', book);
        } else {
            util.setError(404, 'BOOK NOT FOUND!');
        }

        return util.send(res);

    } catch (err) {
        util.setError(400, err);
        return util.send(res);
    }
});

router.put('/book/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const updatedBook = req.body;

        const book = await bookService.updateBook(id, updatedBook);

        if (!book) {
            util.setError(404, `BOOK NOT FOUND WITH ID: ${id}!`);
        } else {
            util.setSuccess(200, 'BOOK UPDATED!', book);
        }

        return util.send(res);
    } catch (err) {
        util.setError(400, err);
        return util.send(res);
    }
});

router.delete('/book/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const book = await bookService.deleteBook(id);

        if (!book) {
            util.setError(404, `BOOK NOT FOUND WITH ID: ${id}!`);
        } else {
            util.setSuccess(201, 'BOOK DELETED!', book);
        }

        return util.send(res);
    } catch (err) {
        util.setError(400, err);
        return util.send(res);
    }
});

module.exports = router;
