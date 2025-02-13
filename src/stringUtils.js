/**
 * Trims leading and trailing whitespace from a given string.
 *
 * @param {string} input - The string to be trimmed.
 * @returns {string} The trimmed string, or an empty string if the input is falsy.
 */
export const trimWhitespace = (input) => {
	if (!input) return '';
	return input?.trim().replace(/\s+/g, ' ');
};
