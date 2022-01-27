import { AxiosResponse } from "axios";
import { QuotesData } from "../types/coinmarket";

export const formatQuotes = (data: AxiosResponse) => {
  const cryptoInfo = data.data.BTC;

  const { id, name, symbol, slug, date_added, last_updated, quote }: QuotesData =
    cryptoInfo;

  const output = {
    BTC: {
      id: id,
      name: name,
      symbol: symbol,
      slug: slug,
      last_updated: last_updated,
      quote: {
        USD: {
          price: quote.USD.price,
          last_updated: quote.USD.last_updated,
        },
      },
    },
  };

  return output;
};