import axios from 'axios';
import { getUserById } from './userService';
import { describe, expect, jest, test } from '@jest/globals';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getUserById', () => {
  const mockUser = { id: '123', name: 'John Doe' };

  test('should return user data on successful API call', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockUser });

    const user = await getUserById('123');
    expect(user).toEqual(mockUser);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://api.example.com/users/123');
  });

  test('should throw an error when API call fails', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));

    await expect(getUserById('123')).rejects.toThrow('Failed to fetch user');
    expect(mockedAxios.get).toHaveBeenCalledWith('https://api.example.com/users/123');
  });
});
