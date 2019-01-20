<template>
  <div id="app">
    <List
      :isMultiple="true"
      :options="['stg44', 'm1a1', 'ppsh']"
    />
  </div>
</template>

<script>
import List from '@/components/List'

export default {
  name: 'app',

  data () {
    return {
    }
  },

  components: {
    List
  },

  methods: {
  }
}
</script>
