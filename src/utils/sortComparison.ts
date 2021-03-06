export const sortComparison = (property: string) => (a: any, b: any) => {
  if (a[property] < b[property]) {
    return -1;
  }
  if (a[property] > b[property]) {
    return 1;
  }
  return 0;
};
