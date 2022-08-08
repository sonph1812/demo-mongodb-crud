import { Request, Response } from "express";
declare class BookController {
    showListBook: (req: Request, res: Response) => Promise<void>;
    showCreateForm: (req: Request, res: Response) => Promise<void>;
    createBook: (req: Request, res: Response) => Promise<void>;
}
declare const _default: BookController;
export default _default;
