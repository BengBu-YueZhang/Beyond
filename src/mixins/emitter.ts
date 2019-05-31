import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { findParentComponent, findChildsComponent } from '../utils/find';

@Component
export class EmitterMixin extends Vue {

  private dispatch(targetName: string, eventName: string, params: any): void {
    const parent = findParentComponent(this, targetName);
    if (parent) {
      parent.$emit.apply(parent, [eventName, params]);
    }
  }

  private broadcast(targetName: string, eventName: string, params: any): void {
    const chilrens = findChildsComponent(this, targetName);
    if (chilrens && chilrens.length) {
      chilrens.forEach((child) => {
        child.$emit.apply(child, [eventName, params]);
      });
    }
  }
}
