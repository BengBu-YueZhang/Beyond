<template>
  <div id="app">
    <List
      value="value"
      options="options"
    />
  </div>
</template>

<script>
import List from '@/components/List'

export default {
  name: 'app',

  data () {
    return {
      value: '',
      options: [
        '龙子湖',
        '顺义',
        '龙华',
        '罗湖',
        '淮上',
        '黄埔'
      ]
    }
  },

  components: {
    List
  }
}
</script>
