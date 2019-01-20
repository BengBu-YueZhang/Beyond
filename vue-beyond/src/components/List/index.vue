<template>
  <div class="list__wrapper">
    <ul class="list__list">
      <li
        v-for="(item, index) in options"
        :key="index"
        @click="handleListClick(item)"
        class="list__list-item"
        :class="{'list__list-item-active': item === value}"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',

  props: {
    // 是否显示多选
    isMultiple: {
      type: Boolean,
      required: false,
      default: false
    },

    // 是否显示勾选的icon
    isIcon: {
      type: Boolean,
      required: false,
      default: true
    },

    options: {
      type: Array,
      required: false,
      default () {
        return []
      }
    },

    value: {
      type: String,
      required: false,
      default: ''
    }
  },

  methods: {
    handleListClick (item) {
      this.$emit('click', item)
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../styles/variable.less');
@import url('../../styles/border.less');

.list__wrapper {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.list__list {
  width: 100%;
  height: auto;
  background-color: @white;
}

.list__list-item {
  font-size: 28px;
  line-height: 80px;
  color: @grey500;
  text-align: center;
  .scale-1px-bottom(@grey600);
}

.list__list-item-active {
  color: @green500;
}
</style>
