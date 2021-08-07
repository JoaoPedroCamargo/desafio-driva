import { Router } from 'express';

import SumHandlerService from '../services/SumHandlerService';
import ListMoviesService from '../services/ListMoviesService';

const sumHandler = new SumHandlerService();
const listMovies = new ListMoviesService

const routes = Router();

routes.get("/hello", (req, res) => {
    return res.json({ hello: "World"})
})

routes.post("/soma", (req, res) => {
    const { num1, num2 } = req.body; 

    const { result } = sumHandler.execute({ num1, num2 });

    return res.json({ result });
})

routes.get("/starwars/films", async (req, res) => {
    const { starwarsMovies } = await listMovies.execute();

    return res.json({starwarsMovies: starwarsMovies});
})

export default routes;