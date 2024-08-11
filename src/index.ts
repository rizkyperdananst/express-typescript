import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

import router from './routes/Route';

dotenv.config();

const app = express();

app.use(express.json()); // fungsinya agar kita bisa mengirim data dalam bentuk json di postman nya sebagai testing api.

app.get('/', (req: Request, res: Response) => {
    return res.status(200).send({
        response: "Express TypeScript"
    });
});

app.use(router);

app.listen(process.env.APP_PORT, () => {
    console.log(`${process.env.APP_NAME} running on port ${process.env.APP_PORT}`)
});