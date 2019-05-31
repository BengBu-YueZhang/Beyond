import Vue from 'vue';

interface Component extends Vue {
  [key: string]: any;
}

/**
 * 查找子组件(包含嵌套的子组件)
 * @param {String} name 组件名
 */
export function findChildsComponent(target: Component, name: string): Component[] {
  const children: Component[] = [];
  const find = (currentTarget: Component): void => {
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
 * 按照层级查找子组件
 * @param {String} name 组件名
 */
export function findChildsComponentByLevel(target: Component, name: string, level: number): Component[] {
  const children: Component[] = [];
  const find = (currentTarget: Component, currentLevel: number): void => {
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
export function findChildsComponentByFirstLevel(target: Component, name: string): Component[] {
  return findChildsComponentByLevel(target, name, 1);
}

/**
 * 查找同级兄弟组件
 * @param {String} name 组件名
 * @param {Boolean} includeMe 是否包含自身
 */
export function findBrothersComponent(target: Component, name: string, includeMe: boolean = true): Component[] {
  const children: Component[] = target.$parent.$children.filter((child: Component) => {
    return child.$options.name === name;
  });
  if (!includeMe) {
    return children.filter((child: Component) => {
      return child !== target;
    });
  }
  return children;
}

/**
 * 查找父组件
 */
export function findParentComponent(target: Component, name: string): Component {
  let parent!: Component;
  const find = (currentTarget: Component) => {
    if (!currentTarget) {
      return;
    }
    if (currentTarget.$parent) {
      const parentComponent = currentTarget.$parent;
      const parentName = parentComponent.$options.name;
      if (parentName === name) {
        parent = parentComponent;
      } else {
        find(parentComponent);
      }
    }
  };
  find(target);
  return parent;
}
