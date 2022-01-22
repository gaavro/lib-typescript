import {KenCrypto} from "./api/coinmarket";
export { Convert, Quote, ApiKey } from "./types/coinmarket";

export const krypto= new KenCrypto();

const quotes_data = krypto.quotes(['BTC']).then(resp=>{
    console.log(resp.data)
})

const conversion_data = krypto.conversion('BTC', 0.005, 'ETH').then(resp=>{
    console.log(resp.data)
})