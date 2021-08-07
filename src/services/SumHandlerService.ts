import AppError from '../errors/AppError';

interface IRequest {
    num1: number;
    num2: number;
}

interface IResponse {
  result: number;
}

class SumHandlerService {
   
  public execute({ num1, num2 }: IRequest): IResponse {
    
    if(typeof(num1) !== 'number'){
      throw new AppError('You must send only numbers', 406) 
    }

    if(typeof(num2) !== 'number'){
      throw new AppError('You must send only numbers', 406) 
    }

    return {
      result: num1 + num2
    };
  }
}

export default SumHandlerService;