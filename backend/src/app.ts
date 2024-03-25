import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import recordRouter from './record/record.routes';
import loginRouter from './login/login.routes';
import helmet from 'helmet'
import cors from 'cors';
import logger from './middleware/logger.middleware';

dotenv.config();

const app = express();
const port = process.env.PORT;

// enable all CORS request
app.use(cors());

// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// adding set of security middleware
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

//MySQLConnector.initializeMySqlConnector();

if (process.env.NODE_ENV == "development") {
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode')
}

// Application routes
// root route
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome backend API<h1/>');
});
// adding router middleware
app.use('/', [recordRouter, loginRouter])

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});