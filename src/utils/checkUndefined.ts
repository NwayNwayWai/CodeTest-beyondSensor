export function checkUndefined(data: any): number {
  if (data === undefined) {
    return 0;
  } else {
    // Return data if it's not undefined
    return data;
  }
}
