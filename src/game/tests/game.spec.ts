import { Game } from "../Game";

describe("Game first suite", () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
    game.loadCards();
  });

  it("create a game instance at era 1", () => {
    expect(game).not.toBe(undefined);
    expect(game.era).toBe(1);
  });

  it("should have cards", () => {
    expect(game.cards[1].length).toBeGreaterThan(0);
  });
});
