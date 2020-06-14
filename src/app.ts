import express from "express";
import bodyParser from "body-parser";
import ContactRoutes from "./routes";



class App {

    public app: express.Application;
    public routePrv: ContactRoutes = new ContactRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;