import { Request, Response } from "express";
declare class UserController {
    private userRepository;
    constructor();
    showListUser: (req: Request, res: Response) => Promise<void>;
    showCreateForm: (req: Request, res: Response) => Promise<void>;
    createUser: (req: Request, res: Response) => Promise<void>;
    deleteUser: (req: Request, res: Response) => Promise<void>;
    showUpdateForm: (req: Request, res: Response) => Promise<void>;
    updateUser: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
