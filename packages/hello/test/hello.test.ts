import { Hello } from '../src';

describe('hello', () => {
    it('print', () => {
        const h = new Hello();
        h.print();
    });
    it('getHello', () => {
        const h = new Hello();
        expect(h.getHello()).toBe('hello');
    });
});
