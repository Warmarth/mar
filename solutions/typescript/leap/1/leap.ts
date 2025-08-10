export function isLeap(arg: number): boolean {
  return arg % 4 === 0 && (arg % 100 !== 0 || arg % 400 === 0);
}
