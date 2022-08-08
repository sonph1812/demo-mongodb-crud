"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("../model/book");
class BookController {
    constructor() {
        this.showListBook = async (req, res) => {
            let books = await book_1.Book.find();
            res.render('book/list', {
                books: books
            });
        };
        this.showCreateForm = async (req, res) => {
            res.render('book/create');
        };
        this.createBook = async (req, res) => {
            let books = req.files;
            console.log(req.body);
            if (books) {
                let book = req.body;
                if (books) {
                    if (books.image && book.name) {
                        let book = books.image;
                        book.mv('./public/storage/' + book.name);
                        book.image1 = 'storage/' + book.name;
                        await books.save(book);
                        res.redirect(301, '/book/list');
                    }
                    else {
                        res.render('error');
                    }
                }
                else {
                    res.render('error');
                }
            }
        };
    }
}
exports.default = new BookController();
//# sourceMappingURL=BookController.js.map