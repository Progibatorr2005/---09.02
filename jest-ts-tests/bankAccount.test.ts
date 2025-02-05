import { describe, beforeEach, test, expect } from '@jest/globals';
import { BankAccount } from './bankAccount';

describe('BankAccount', () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test('should initialize with the correct balance', () => {
    expect(account.getBalance()).toBe(100);
  });

  test('should deposit money correctly', () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test('should throw error when depositing zero or negative amount', () => {
    expect(() => account.deposit(0)).toThrow('Deposit amount must be greater than zero');
    expect(() => account.deposit(-10)).toThrow('Deposit amount must be greater than zero');
  });

  test('should withdraw money correctly', () => {
    account.withdraw(30);
    expect(account.getBalance()).toBe(70);
  });

  test('should throw error when withdrawing more than balance', () => {
    expect(() => account.withdraw(200)).toThrow('Insufficient funds');
  });

  test('should throw error when withdrawing zero or negative amount', () => {
    expect(() => account.withdraw(0)).toThrow('Withdrawal amount must be greater than zero');
    expect(() => account.withdraw(-10)).toThrow('Withdrawal amount must be greater than zero');
  });

  test('should handle negative initial balance gracefully', () => {
    expect(() => new BankAccount(-100)).toThrow('Initial balance cannot be negative');
  });
});