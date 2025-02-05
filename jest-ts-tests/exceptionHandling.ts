export function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
  
  export function parseJSON(jsonString: string): any {
    try {
      return JSON.parse(jsonString);
    } catch {
      throw new Error('Invalid JSON string');
    }
  }