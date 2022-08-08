import { Request, Response } from "express";
import { Book } from "../model/book";
import {Uploadfile} from "express-fileupload"

class BookController {
    showListBook = async (req: Request, res: Response) => {
        let books = await Book.find();
        res.render('book/list', {
            books: books
        })
    }
    showCreateForm = async (req:Request,res:Response)=>{
        res.render('book/create');
    }
    createBook = async (req: Request, res: Response) => {
        let books = (req as any).files
        console.log(req.body);
        if(books){
            let book = req.body;
            if(books){
                if(books.image && book.name){
                    let book = books.image as Uploadfile;
                    book.mv('./public/storage/'+book.name);
                    book.image1 = 'storage/' + book.name;
                    await books.save(book)
                    res.redirect(301,'/book/list')
                }else {
                    res.render('error');
                }
            }else{
                res.render('error')
            }
        }

    }


}

export default new BookController();