import { 
    removeDuplicates, 
    sortNumbers, 
    sumPositiveNumbers, 
    groupByParity, 
    findCommonElements 
  } from './src/arrayUtils.js';
  import fc from 'fast-check';
  
  describe('removeDuplicates', () => {
    test('удаляет дубликаты', () => {
      expect(removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
      expect(removeDuplicates(['a', 'a', 'b'])).toEqual(['a', 'b']);
    });
  
    test('property-based: результат не содержит дубликатов', () => {
      fc.assert(
        fc.property(fc.array(fc.anything()), (arr) => {
          const result = removeDuplicates(arr);
          return new Set(result).size === result.length;
        })
      );
    });
  });
  
  describe('sortNumbers', () => {
    test('сортирует числа по возрастанию', () => {
      expect(sortNumbers([3, 1, 2])).toEqual([1, 2, 3]);
      expect(sortNumbers([-5, 10, 0])).toEqual([-5, 0, 10]);
    });
  
    test('property-based: результат отсортирован', () => {
      fc.assert(
        fc.property(fc.array(fc.integer()), (arr) => {
          const sorted = sortNumbers(arr);
          for (let i = 1; i < sorted.length; i++) {
            if (sorted[i - 1] > sorted[i]) return false;
          }
          return true;
        })
      );
    });
  });
  
  describe('sumPositiveNumbers', () => {
    test('суммирует положительные числа', () => {
      expect(sumPositiveNumbers([1, -2, 3])).toBe(4);
      expect(sumPositiveNumbers([-5, -10])).toBe(0);
    });
  
    test('property-based: сумма положительных ≥ 0', () => {
      fc.assert(
        fc.property(fc.array(fc.integer()), (arr) => {
          const sum = sumPositiveNumbers(arr);
          return sum >= 0;
        })
      );
    });
  });
  
  describe('groupByParity', () => {
    test('разделяет числа на четные и нечетные', () => {
      expect(groupByParity([1, 2, 3, 4])).toEqual({
        even: [2, 4],
        odd: [1, 3]
      });
    });
  
    test('property-based: все числа распределены', () => {
      fc.assert(
        fc.property(fc.array(fc.integer()), (arr) => {
          const grouped = groupByParity(arr);
          const total = grouped.even.length + grouped.odd.length;
          return total === arr.length;
        })
      );
    });
  });
  
  describe('findCommonElements', () => {
    test('находит общие элементы', () => {
      expect(findCommonElements([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
      expect(findCommonElements(['a', 'b'], ['c'])).toEqual([]);
    });
  
    test('property-based: результат — подмножество обоих массивов', () => {
      fc.assert(
        fc.property(fc.array(fc.integer()), fc.array(fc.integer()), (arr1, arr2) => {
          const common = findCommonElements(arr1, arr2);
          const set1 = new Set(arr1);
          const set2 = new Set(arr2);
          return common.every(item => set1.has(item) && set2.has(item));
        })
      );
    });
  });
