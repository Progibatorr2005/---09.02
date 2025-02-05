import { DatabaseService, User } from './databaseService';
import { UserService } from './useservice';

describe('UserService Integration Tests', () => {
  let databaseService: DatabaseService;
  let userService: UserService;

  beforeEach(() => {
    databaseService = new DatabaseService();
    userService = new UserService(databaseService);
  });

  test('should add and retrieve a user successfully', () => {
    const user: User = { id: '1', name: 'John Doe' };

    databaseService.addUser(user);
    const retrievedUser = userService.getUserById('1');

    expect(retrievedUser).toEqual(user);
  });

  test('should return undefined for a non-existent user', () => {
    const retrievedUser = userService.getUserById('999');
    expect(retrievedUser).toBeUndefined();
  });
});