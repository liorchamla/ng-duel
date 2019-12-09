import { Card } from "./Card";
import { ResourceCard } from "./cards/ResourceCard";

export class Game {
  public cards = {
    1: [],
    2: [],
    3: []
  };

  constructor(public era: number = 1) {}

  public loadCards() {
    this.cards[this.era].push(
      new ResourceCard("Wood Factory", 1, true, "", "")
    );
  }
}
