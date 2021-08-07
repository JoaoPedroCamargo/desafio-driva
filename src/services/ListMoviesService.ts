import AppError from '../errors/AppError';
import api from './api';

interface IResponse {
  starwarsMovies: any;
}

class ListMoviesService {
   
  public async execute(): Promise<IResponse> {
    
    const { data } = await api.get("/api/films");

    if(!data) {
      throw new AppError('Failed while connecting to api', 400) 
    }
  
    const movies = await data.results;
    const moviesList = [];

    for(let i = 0; i < movies.length; i++){
        moviesList.push(movies[i].title)
    }

    return {
        starwarsMovies: moviesList
    };
  }
}

export default ListMoviesService;