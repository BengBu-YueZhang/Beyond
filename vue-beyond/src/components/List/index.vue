<template>
  <div class="list__wrapper">
    <CheckboxGroup :isMultiple="isMultiple" v-model="currentValue">
      <ul class="list__list">
        <li
          v-for="(item, index) in options"
          :key="index"
          class="list__list-item"
        >
          <Checkbox :label="item.value">
            <p class="list__list-item-text">{{ item.label }}</p>
          </Checkbox>
        </li>
      </ul>
    </CheckboxGroup>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox'
import CheckboxGroup from '@/components/CheckboxGroup'

export default {
  name: 'List',

  components: {
    Checkbox,
    CheckboxGroup
  },

  props: {
    // 是否支持多选
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
      currentValue: [...this.value]
    }
  },

  watch: {
    currentValue: {
      handler (val) {
        console.log(val)
      }
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
  & .list__list-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 28px;
    line-height: 80px;
    color: @grey500;
    text-align: center;
    .scale-1px-bottom(@grey600);
    box-sizing: border-box;
    padding: 0 40px;
    & .list__list-item-text {
      padding-left: 15px;
    }
  }
}
</style>
