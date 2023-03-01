import { dayRate } from '../../main/numbers/freelancer-rates';
describe(128, () => {
    test(16, () => {
        expect(dayRate(16)).toEqual(128);
    });
});

describe(200, () => {
    test(25, () => {
        expect(dayRate(25)).toBe(200);
    });
});