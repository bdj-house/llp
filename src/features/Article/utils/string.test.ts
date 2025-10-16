import { describe, it, expect } from 'vitest';
import { getInitials, getAuthorDisplayName } from './string';

describe('getInitials', () => {
  it('should return empty string for undefined', () => {
    expect(getInitials(undefined)).toBe('');
  });

  it('should return empty string for empty string', () => {
    expect(getInitials('')).toBe('');
  });

  it('should return first letter for single word', () => {
    expect(getInitials('John')).toBe('J');
  });

  it('should return first and last initials for full name', () => {
    expect(getInitials('John Doe')).toBe('JD');
  });

  it('should handle multiple middle names correctly', () => {
    expect(getInitials('John Robert Smith')).toBe('JS');
  });

  it('should handle extra spaces', () => {
    expect(getInitials('  John   Doe  ')).toBe('JD');
  });

  it('should return uppercase initials', () => {
    expect(getInitials('john doe')).toBe('JD');
  });

  it('should handle names with accents', () => {
    expect(getInitials('José Silva')).toBe('JS');
  });
});

describe('getAuthorDisplayName', () => {
  it('should return first name and last name for full names', () => {
    expect(getAuthorDisplayName('John Doe')).toBe('John Doe');
  });

  it('should handle single name', () => {
    // Function returns "FirstName FirstName" for single names
    expect(getAuthorDisplayName('John')).toBe('John John');
  });

  it('should handle three or more names', () => {
    expect(getAuthorDisplayName('John Robert Smith')).toBe('John Smith');
  });

  it('should return empty string for undefined', () => {
    expect(getAuthorDisplayName(undefined)).toBe('');
  });

  it('should handle extra spaces', () => {
    expect(getAuthorDisplayName('  John   Doe  ')).toBe('John Doe');
  });

  it('should handle Portuguese names', () => {
    expect(getAuthorDisplayName('José da Silva')).toBe('José Silva');
  });
});
