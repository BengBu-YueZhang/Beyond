<template>
  <div>
    111
    <Radio :disabled="true">
      111
    </Radio>

    <Radio :disabled="false">
      2222
    </Radio>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Radio from '../packages/Radio';

@Component({
  components: {
    Radio,
  },
})
export default class ButtonView extends Vue {
}
</script>