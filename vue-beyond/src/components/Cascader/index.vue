<template>
  <div class="cascader__wrapper">
    <div class="cascader__list"
      v-for="(co, index) in cascaderOptions"
      :key="index"
    >
      <List
        @change="(value) => { handleListChange(index, value) }"
        :options="co"
        :value="currentValue[index]"
        class="cascader__menu"
      />
    </div>
  </div>
</template>

<script>
import List from '@/components/List'

export default {
  name: 'Cascader',

  model: {
    prop: 'value',
    event: 'change'
  },

  components: {
    List
  },

  props: {
    isMultiple: {
      type: Boolean,
      required: false,
      default: false
    },

    options: {
      type: Array,
      required: false,
      default () {
        return []
      }
    },

    value: {
      type: Array,
      required: false,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      cascaderOptions: [],
      currentValue: [...this.value]
    }
  },

  mounted () {
    this.cascaderOptions = [this.options]
  },

  watch: {
    value: {
      handler (val) {
        this.currentValue = val
      }
    }
  },

  methods: {
    handleListChange (level, value) {
      this.cascaderOptions = this.cascaderOptions.filter((co, index) => index <= level)
      this.currentValue = this.currentValue.filter((value, index) => index < level)
      this.value.push(value[0])
      if (this.cascaderOptions[this.cascaderOptions.length - 1]) {
        this.cascaderOptions[this.cascaderOptions.length - 1].forEach((co) => {
          if (co.value === value[0] && co.children) {
            this.cascaderOptions.push(co.children)
          }
        })
      }
      this.$emit('change', this.value)
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../styles/border.less');
@import url('../../styles/variable.less');

.cascader__wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  & .cascader__list {
    flex: 1;
    .scale-1px-right(@grey600);
  }
  & .cascader__list:nth-last-child(1)::before {
    width: 0 !important;
  }
}
</style>
