import { Router, Request, Response, NextFunction } from 'express';
import { FirstController } from './routes/first.controller';

export class Routes {
    public static ConfigureRoutes(app: Router) {
        app.use(FirstController.route, new FirstController().router);

        app.use(function (err,req: Request, res: Response, next: NextFunction) {
            Routes.ServerError(req, res, next, err);
        });
    }

    private static ServerError(req: Request, res: Response, next: NextFunction, error) {
        error = {
            code: error.code,
            msg: error.message
        };
        let body = {
            message: error.message
        }

        res.sendStatus(error.code).json(body);
    }
}