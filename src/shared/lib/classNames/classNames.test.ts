import { classNames } from './className';

describe('classNames', () => {
    test('С единственным первм параметром', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('С дополнительным массивом классов', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
    });
    test('С дополнительным модами', () => {
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered scrollable');
    });
    test('С дополнительным модами false', () => {
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered');
    });
    test('С дополнительным модами undefined', () => {
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered');
    });
});
