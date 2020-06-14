import {Request, Response, Application} from "express";

export class ContactRoutes {
    public routes(app: Application ): void {

        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET  successfully.'
            })
        })


        app.route('/contact')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET all contact successfully.'
            })
        })
        .post((req: Request, res: Response) => {
            res.status(201).send({
                message: 'POST create contact successfully.'
            })
        })


        app.route('/contact/:contactId')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET view single contact successfully.'
            })
        })
        .put((req: Request, res: Response) => {
            res.status(200).send({
                message: 'PUT update single contact successfully.'
            })
        })
        .delete((req: Request, res: Response) => {
            res.status(204).send({
                message: 'DELETE single contact successfully.'
            })
        })
    }
}