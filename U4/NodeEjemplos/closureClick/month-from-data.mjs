// month-from-date.mjs
export function monthFromDate(dateString) {
  const date = dateString ? new Date(dateString) : new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  return month;
}

