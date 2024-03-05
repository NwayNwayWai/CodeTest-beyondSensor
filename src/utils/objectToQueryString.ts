export function objectToQueryString(obj: Record<string, any>): string {
  const queryString = Object.keys(obj)
    .map((key: string) => {
      if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
        return `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
      } else {
        return ''; // Skip undefined or null values
      }
    })
    .filter(Boolean) // Filter out empty strings
    .join('&');

  return queryString;
}
