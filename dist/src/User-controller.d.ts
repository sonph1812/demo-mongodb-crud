import { Request, Response } from "express";
export declare class UserController {
    private userRepository;
    constructor();
    showListUser: (req: Request, res: Response) => Promise<void>;
}
