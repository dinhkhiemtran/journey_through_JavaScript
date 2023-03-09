import { createScoreBoard, addPlayer } from '../../main/objects/high-score-board'

describe("{'The Best Ever': 1000000}", () => {
    test('', () => {
        expect(createScoreBoard()).toEqual({'The Best Ever': 1000000});
    });
});

const expected1 = {
    'Amil Pastorius': 99373,
    'Min-seo Shin': 0,
    'Jesse Johnson': 1337,
  };
describe("expected1", () => {
    const scoreBoard = {
        'Amil Pastorius': 99373,
        'Min-seo Shin': 0,
      };
      const actual = addPlayer(scoreBoard, 'Jesse Johnson', 1337);
    test("actual", () => {
        expect(actual).toEqual(expected1);
    });
});


