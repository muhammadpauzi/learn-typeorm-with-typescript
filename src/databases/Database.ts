import { createConnection, Connection } from 'typeorm';

export default class Database {
    private connection!: Connection;

    public connect(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const connection = await createConnection();
                this.setConnection(connection);
                resolve(connection);
            } catch (error) {
                reject(error);
            }
        })
    }

    private setConnection(connection: Connection) {
        this.connection = connection;
    }
}