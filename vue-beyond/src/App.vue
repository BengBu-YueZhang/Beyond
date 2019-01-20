<template>
  <div id="app">
    <!-- <List
      :isMultiple="true"
      :options="['stg44', 'm1a1', 'ppsh']"
    /> -->
    <Checkbox v-model="checked">
      123
    </Checkbox>
  </div>
</template>

<script>
// import List from '@/components/List'
import Checkbox from '@/components/Checkbox'

export default {
  name: 'app',

  data () {
    return {
      checked: false
    }
  },

  watch: {
    checked () {
      console.log(this.checked)
    }
  },

  components: {
    Checkbox
  },

  methods: {
  }
}
</script>
