import { Request, Response } from "express";
export declare class UsersController {
    private persistanceService;
    constructor();
    create(req: Request, res: Response): Promise<void>;
    list(req: Request, res: Response): Promise<void>;
    show(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
}
