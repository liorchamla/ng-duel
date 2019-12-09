import { Card } from "../Card";
import { Effect } from "../Effect";
import { Cost } from "../Cost";

export class CardBuilder {
  public title: string = "";
  public hidden: boolean = false;
  public effect: Effect = null;
  public cost: Cost = null;
  public era: number = 1;
  public image: string = "";
  public chain: string = null;
  public symbol: string = null;

  public setSymbol(symbol: string) {
    this.symbol = symbol;
    return this;
  }

  public setChain(chain: string) {
    this.chain = chain;
    return this;
  }

  public setTitle(title: string) {
    this.title = title;
    return this;
  }

  public setHidden(hidden: boolean) {
    this.hidden = hidden;
    return this;
  }

  public setEra(era: number) {
    this.era = era;
    return this;
  }

  public setImage(image: string) {
    this.image = image;
    return this;
  }

  public setEffect(effect: Effect) {
    this.effect = effect;
    return this;
  }

  public setCost(cost: Cost) {
    this.cost = cost;
    return this;
  }

  public getCard() {
    // return new Card(
    //   this.title,
    //   this.era,
    //   this.hidden,
    //   this.image,
    //   this.effect,
    //   this.cost,
    //   this.chain,
    //   this.symbol
    // );
  }
}
