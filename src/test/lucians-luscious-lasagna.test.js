import { describe } from '@jest/globals';
import { canExecuteFastAttack } from '../main/annalyns-infiltration';

describe("true", () => {
    test("false", () => {
      expect(canExecuteFastAttack(false)).toBe(true);
    });
  });