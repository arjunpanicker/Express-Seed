import { Router, Request, Response, NextFunction } from 'express';

export class FirstController {
    public static route = '/first';

    public router: Router = Router();

    constructor() {
        this.router.get('/', this.getAll);
        this.router.get('/one', this.getFirst);
    }

    private getAll(req: Request, res: Response, next: NextFunction) {
        res.send('This is the getAll Method!!');
    }

    private getFirst(req: Request, res: Response, next: NextFunction) {
        res.send('This is the getFirst Method!!');
    }
}