import { fetchData, delay } from './asyncFunctions';

global.fetch = jest.fn();

describe('fetchData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return data when fetch is successful', async () => {
    const mockResponse = 'Hello, world!';
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      text: jest.fn().mockResolvedValue(mockResponse),
    });

    const data = await fetchData('https://example.com');
    expect(data).toBe(mockResponse);
    expect(fetch).toHaveBeenCalledWith('https://example.com');
  });

  test('should throw an error when fetch fails', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    await expect(fetchData('https://example.com')).rejects.toThrow('Failed to fetch data');
  });
});

describe('delay', () => {
  jest.useFakeTimers();

  test('should wait for the specified time', async () => {
    const mockCallback = jest.fn();

    delay(1000).then(mockCallback);
    jest.advanceTimersByTime(1000);

    await Promise.resolve();

    expect(mockCallback).toHaveBeenCalled();
  });
});