export interface CoinMarket {
    data: QuotesData;
  }

  export interface QuotesData {
    [mimetype: string]: {
      id: number;
      name: string;
      symbol: string;
      slug: string;
      date_added: Date;
      last_updated: Date;
      quote: QuoteData;
      USD: QuoteData;
    };
  }


  export interface QuoteData {
    [mimetype: string]: {
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
    last_updated: Date;
    quote: QuoteData
    };
};

export interface Error404 {
    detail: string
}



export interface ApiKey {
[mimeType: string]: string;
}