export interface IScreenProps {
  navigation: any;
  route: any;
}

export interface ITicker {
  baseVolume: string | number;
  high24hr: string | number;
  highestBid: string | number;
  id: number;
  isFrozen: string | number;
  last: string | number;
  low24hr: string | number;
  lowestAsk: string | number;
  percentChange: string | number;
  quoteVolume: string | number;
}

export type ITickerData = Record<string, ITicker>;
