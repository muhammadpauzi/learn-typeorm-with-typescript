import App from './App';
import "reflect-metadata";
import express from 'express';

import userRouter from './routes/users';

const app = new App();

app
    .registerMiddleware(express.json())
    .registerRoute('/api/users', userRouter)
    .run(5000, (port: number) => {
        console.log("Database connected!");
        console.log(`Server is running at http://127.0.0.1:${port}`);
    })

