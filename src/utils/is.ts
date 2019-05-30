/**
 * 判断数据类型
 * is(Function, () => {}) true
 */
function is(Ctor: any, val: any): boolean {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
}

export default is
