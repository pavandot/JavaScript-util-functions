import { describe, it, expect } from 'vitest';
import { trimWhitespace } from '../src';

describe('trimWithSpace', () => {
	it('Remove spaces from both ends of the string', () => {
		expect(trimWhitespace('  hello  ')).toBe('hello');
	});
	it('Remove extra spaces in between of string', () => {
		expect(trimWhitespace('  hello       my  name is pavan  ')).toBe('hello my name is pavan');
	});
	it('return empty string for empty input', () => {
		expect(trimWhitespace('')).toBe('');
	});
	it('handles falsy values gracefully', () => {
		expect(trimWhitespace(null)).toBe('');
		expect(trimWhitespace(undefined)).toBe('');
	});
});
