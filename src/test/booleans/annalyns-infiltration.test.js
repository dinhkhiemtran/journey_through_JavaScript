import { describe } from "@jest/globals";
import { canExecuteFastAttack } from "../../main/booleans/annalyns-infiltration";

describe("true", () => {
  test("false", () => {
    expect(canExecuteFastAttack(false)).toBe(true);
  });
});
