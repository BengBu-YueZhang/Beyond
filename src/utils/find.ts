import Vue from 'vue';

/**
 * 查找子组件(包含嵌套的子组件)
 * @param {String} name 组件名
 */
export function findChildsComponent(target: Vue, name: string): Array<Vue> {
  let children: Array<Vue> = [];
  const find = (target: Vue): void => {
    const childrens = target.$children;
    for (let child of childrens) {
      const childName = child.$options.name;
      if (childName === name) {
        children.push(child);
      } else {
        find(child);
      }
    }
  };
  return children;
}

export function findChildsComponentByLevel(target: Vue, name: string, level: number): Array<Vue> {
  let children: Array<Vue> = [];
  const find = (target: Vue, currentLevel: number): void => {
    if (currentLevel > level) {
      return
    }
    const childrens = target.$children;
    for (let child of childrens) {
      const childName = child.$options.name;
      if (childName === name) {
        children.push(child);
      } else {
        find(child, currentLevel + 1);
      }
    }
  };
  find(target, 1);
  return children;
}

/**
 * 查找第一层子组件
 */
export function findChildsComponentByFirstLLevel(target: Vue, name: string): Array<Vue> {
  return findChildsComponentByLevel(target, name, 1);
}

/**
 * 查找同极兄弟组件
 * @param {String} name 组件名
 */
export function findBrothersComponent(target: Vue, name: string): Array<Vue> {
  let children: Array<Vue> = [];
  return children;
}
