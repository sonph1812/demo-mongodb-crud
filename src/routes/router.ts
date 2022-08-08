import { Router } from "express";
import BookController from "../controller/BookController";

export const router = Router();
router.get('/book/list',BookController.showListBook)
router.post('/book/create', BookController.createBook)
router.get('/book/create', BookController.showCreateForm)