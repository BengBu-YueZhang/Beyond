import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { findParentComponent } from '../utils/find';

@Component
export class EmitterMixin extends Vue {
  private dispatch(targetName: string, eventName: string, params: any): void {
    const parent = findParentComponent(this, targetName);
    if (parent) {
      parent.$emit.apply(parent, [eventName, params]);
    }
  }
}
