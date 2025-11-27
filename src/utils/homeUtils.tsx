/**
 * Format a date object into a string in the format "MMMM d, yyyy".
 * @param {Date} date - The date object to format.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

/**
 * Format a Date object into a string in the format "HH:mm:ss".
 * @param {Date} date - The Date object to format.
 * @returns {string} - The formatted time string.
 */
export const formatTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};
