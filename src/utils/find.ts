import Vue from 'vue';

/**
 * 查找子组件(包含嵌套的子组件)
 * @param {String} name 组件名
 */
export function findChildsComponent(target: Vue, name: string): Vue[] {
  const children: Vue[] = [];
  const find = (currentTarget: Vue): void => {
    const childrens = currentTarget.$children;
    for (const child of childrens) {
      const childName = child.$options.name;
      if (childName === name) {
        children.push(child);
      } else {
        find(child);
      }
    }
  };
  find(target);
  return children;
}

/**
 * 按照查找子组件
 * @param {String} name 组件名
 */
export function findChildsComponentByLevel(target: Vue, name: string, level: number): Vue[] {
  const children: Vue[] = [];
  const find = (currentTarget: Vue, currentLevel: number): void => {
    if (currentLevel > level) {
      return;
    }
    const childrens = currentTarget.$children;
    for (const child of childrens) {
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
export function findChildsComponentByFirstLLevel(target: Vue, name: string): Vue[] {
  return findChildsComponentByLevel(target, name, 1);
}

/**
 * 查找同极兄弟组件
 * @param {String} name 组件名
 * @param {Boolean} includeMe 是否包含自身
 */
export function findBrothersComponent(target: Vue, name: string, includeMe: boolean = true): Vue[] {
  const children: Vue[] = target.$parent.$children.filter((child: Vue) => {
    return child.$options.name === name;
  });
  if (!includeMe) {
    return children.filter((child: Vue) => {
      return child !== target;
    });
  }
  return children;
}
