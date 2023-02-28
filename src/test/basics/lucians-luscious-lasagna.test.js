import { EXPECTED_MINUTES_IN_OVEN, remainingMinutesInOven, preparationTimeInMinutes, totalTimeInMinutes } from '../../main/basics/lucians-luscious-lasagna';

expect(EXPECTED_MINUTES_IN_OVEN).toBe(40);
expect(remainingMinutesInOven(25)).toBe(15);
expect(remainingMinutesInOven(5)).toBe(35);
expect(remainingMinutesInOven(39)).toBe(1);
expect(remainingMinutesInOven(40)).toBe(0);
expect(remainingMinutesInOven(0)).toBe(40);
expect(preparationTimeInMinutes(1)).toBe(2);
expect(preparationTimeInMinutes(2)).toBe(4);
expect(preparationTimeInMinutes(8)).toBe(16);
expect(totalTimeInMinutes(1, 5)).toBe(7);
expect(totalTimeInMinutes(4, 15)).toBe(23);
expect(totalTimeInMinutes(1, 35)).toBe(37);
test.skip('skip', () => {});