import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}));

app.use(express.json({ limit: '16kb' })); //access json file

app.use(express.urlencoded({ extended: true, limit: '16kb' })); // how do you want to show your url

app.use(express.static("public")) // if you want to store static-files(pdf, images)

app.use(cookieParser());


export { app }