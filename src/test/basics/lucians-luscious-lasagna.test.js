import { EXPECTED_MINUTES_IN_OVEN, remainingMinutesInOven, preparationTimeInMinutes, totalTimeInMinutes } from '../../main/basics/lucians-luscious-lasagna';


describe(15, () => {
    test(25, () => {
        expect(remainingMinutesInOven(25)).toEqual(15);
    });
});

describe(35, () => {
    test(5, () => {
        expect(remainingMinutesInOven(5)).toBe(35)
    });
});

describe(1, () => {
    test(39, () => {
        expect(remainingMinutesInOven(39)).toBe(1);
    });
});

describe(0, () => {
    test(40, () => {
        expect(remainingMinutesInOven(40)).toBe(0);
    });
});







