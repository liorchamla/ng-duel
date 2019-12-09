import { Cost } from "./Cost";
import { Effect } from "./Effect";

export interface Card {
  title: string;
  era: number;
  hidden: boolean;
  image: string;
  effect?: Effect;
  cost?: Cost;
  chain?: string;
  symbol?: string;
  score?: number;
}

export type Cards = Card[];
