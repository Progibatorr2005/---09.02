export async function fetchData(url: string): Promise<string> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.text();
  }
  
  export async function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }