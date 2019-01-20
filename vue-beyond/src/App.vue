<template>
  <div id="app">
    <List
      :options="[
        {
          label: '测试1',
          value: '1'
        },
        {
          label: '测试2',
          value: '2'
        },
        {
          label: '测试3',
          value: '3'
        }
      ]"
    />
  </div>
</template>

<script>
import List from '@/components/List'

export default {
  name: 'app',

  data () {
    return {
      value: []
    }
  },

  components: {
    List
  }
}
</script>
