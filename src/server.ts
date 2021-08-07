import express, {Request, Response, NextFunction} from "express";
import swaggerUi from 'swagger-ui-express';
import { errors } from 'celebrate';

import swaggerFile from './swagger.json';

import AppError from "./errors/AppError";
import routes from './routes/index';

const app = express();

app.use(express.json());
app.use('/api-docs',  swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }
  
    console.error(err);
  
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
});

app.listen(3333, () => {console.log("Desafio Driva online!")});