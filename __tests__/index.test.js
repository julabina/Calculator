import index from '../index';

describe('calcul', () => {
    it('should return 1 + 2 = 3', () => {
        expect(index.addition(1, 2)).toEqual(3);
    });
    it('should not return 1 + 2 = 3', () => {
        expect(index.addition(1, 2)).not.toEqual(4);
    });
    
    it('should return 3 - 2 = 1', () => {
        expect(index.subtraction(3, 2)).toEqual(1);
    });
    it('should not return 3 - 2 = 1', () => {
        expect(index.subtraction(3, 2)).not.toEqual(3);
    });

    it('should return 2 * 2 = 4', () => {
        expect(index.multiplication(2, 2)).toEqual(4);
    });
    it('should not return 2 * 2 = 4', () => {
        expect(index.multiplication(2, 2)).not.toEqual(5);
    });

    it('should return 4 / 2 = 2', () => {
        expect(index.divide(4, 2)).toEqual(2);
    });
    it('should not return 4 / 2 = 2', () => {
        expect(index.divide(4, 2)).not.toEqual(4);
    });
})