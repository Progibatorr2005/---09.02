import { divide, parseJSON } from './exceptionHandling';

describe('divide', () => {
  test('should return correct division result', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(-6, 3)).toBe(-2);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
  });
});

describe('parseJSON', () => {
  test('should parse valid JSON string', () => {
    const jsonString = '{"name": "John", "age": 30}';
    expect(parseJSON(jsonString)).toEqual({ name: 'John', age: 30 });
  });

  test('should throw an error for invalid JSON string', () => {
    expect(() => parseJSON('invalid json')).toThrow('Invalid JSON string');
  });
});