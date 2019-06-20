const database = require('../models');
const {book} = database;

class BookService {
    static async getAllBooks() {
        try {
            return await book.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async addBook(newBook) {
        try {
            return await book.create(newBook);
        } catch (error) {
            throw error;
        }
    }

    static async updateBook(id, updateBook) {
        try {
            const bookToUpdate = await book.findOne({
                where: {id: String(id)}
            });

            if (bookToUpdate) {
                await book.update(updateBook, {where: {id: String(id)}});

                return updateBook;
            }

            return null;
        } catch (error) {
            throw error;
        }
    }

    static async getABook(id) {
        try {
            const theBook = await book.findOne({
                where: {id: String(id)}
            });

            return theBook;
        } catch (error) {
            throw error;
        }
    }

    static async deleteBook(id) {
        try {
            const bookToDelete = await book.findOne({where: {id: String(id)}});

            if (bookToDelete) {
                const deletedBook = await book.destroy({
                    where: {id: String(id)}
                });

                return deletedBook;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BookService;
