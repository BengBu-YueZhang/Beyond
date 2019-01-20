<template>
  <div id="app">
    <CheckboxGroup v-model="value">
      <Checkbox label="stg44">stg44</Checkbox>
      <Checkbox label="m1a1">m1a1</Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox'
import CheckboxGroup from '@/components/CheckboxGroup'

export default {
  name: 'app',

  data () {
    return {
      value: []
    }
  },

  created () {
    setTimeout(() => {
      this.value = ['stg44', 'm1a1']
    }, 2000);
  },

  components: {
    Checkbox,
    CheckboxGroup
  }
}
</script>
