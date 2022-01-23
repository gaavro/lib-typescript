export interface CoinMarket {
    data: QuotesData;
  }

  export interface QuotesData {
    [key: string]: {
      id: number;
      name: string;
      symbol: string;
      slug: string;
      date_added: Date;
      total_supply: 33988299055.005;
      last_updated: Date;
      quote: QuoteData;
    };
  }


  export interface QuoteData {
    [key: string]: {
      price: number;
      last_updated: Date;
    };
  }


export interface Convert {
data: {
    id: number;
    symbol: string;
    name: string;
    amount: number;
    last_updated: string;
    quote: {
    [mimeType: string]: {
        price: number;
        last_updated: string;
    };
    };
};
}

export interface Error404 {
    detail: string
}



export interface ApiKey {
[mimeType: string]: string;
}