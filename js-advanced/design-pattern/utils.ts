export function entry(count: number, fn: (...args: any) => void) {
  function dfs(...args) {
    if (args.length < count) {
      return (arg) => dfs(...args, arg);
    }

    return fn(...args);
  }
  return dfs;
}
