import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Working, Working, Working...');
});

app.listen(3000, () => {
    console.log(`Server is running at https://localhost:3000`);
});