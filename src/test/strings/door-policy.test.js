import { frontDoorResponse, frontDoorPassword} from '../../main/strings/door-policy'

describe('Summer', () => {
    test('SUMMER', () => {
        expect(frontDoorPassword('SUMMER')).toBe('Summer');
    });
});
