import axios, { AxiosInstance, AxiosResponse } from "axios";
import * as dotenv from "dotenv";
import { Convert, Error404, CoinMarket } from "../types/coinmarket";
import { ApiKey } from "../types/coinmarket";

dotenv.config();

export class KenCrypto {
baseURL: string = "https://pro-api.coinmarketcap.com/v1";
axiosInstance: AxiosInstance;

    constructor() {
    this.axiosInstance = axios.create({
        baseURL: this.baseURL,
    });
    }

    async quotes(symbol: Array<String>)  {
       let result
        try {
            const response = await this.axiosInstance.get(
              `cryptocurrency/quotes/latest?symbol=${symbol}`,
              {
                headers: <ApiKey>{
                  "X-CMC_PRO_API_KEY": process.env.KEY_VALUE, 
                },
              }
            );
            result = response.data.data 
            console.log(result)
          } catch (error) {
            if (axios.isAxiosError(error)) {
              result = error.response?.data as Error404;
            }
          }
          return result as CoinMarket;
        }
    


    async conversion(symbol: string, amount:number, convert: string)  {
        let result
         try {
            const response = await this.axiosInstance.get(
                `/tools/price-conversion?amount=${amount}&symbol=${symbol}&convert=${convert}`,
               {
                 headers: <ApiKey>{
                   "X-CMC_PRO_API_KEY": process.env.KEY_VALUE, 
                 },
               }
             );
             result = response.data;
           } catch (error) {
             if (axios.isAxiosError(error)) {
               result = error.response?.data as Error404;
             }
           }
           return result as Convert;
         }
     }
