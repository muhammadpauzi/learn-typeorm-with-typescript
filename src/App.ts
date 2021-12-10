import express, { Application, Router } from 'express';
import Database from './databases/Database';

export default class App {
    private app: Application;
    private database: Database;

    constructor() {
        this.app = express();
        this.database = new Database();
    }

    public registerRoute(route: string, router: Router): App {
        this.app.use(route, router);
        return this;
    }

    public registerMiddleware(middleware: any): App {
        this.app.use(middleware);
        return this;
    }

    public async run(port: number, callback: Function): Promise<void> {
        try {
            await this.database.connect();
            this.app.listen(port, () => callback(port));
        } catch (error) {
            console.log(error);
        }
    }
}