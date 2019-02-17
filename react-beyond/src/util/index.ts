export function isFunc (func: any): boolean {
  return Object.prototype.toString.call(func) === '[object Function]'
}

export function isStr (str: any): boolean {
  return Object.prototype.toString.call(str) === '[object String]'
}
