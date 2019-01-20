<template>
  <div class="list__wrapper">
    <ul class="list__list">
      <li
        v-for="(item, index) in options"
        :key="index"
        @click="handleListClick(item)"
        class="list__list-item"
        :class="{'list__list-item-active': isActive(item)}"
      >
        <Checkbox class="list__checkbox">
          <p class="list__checkbox-text">{{ item }}</p>
        </Checkbox>
        <!-- <label :for="item" class="">
          {{ item }}
          <span v-if="isMultiple">
            <input type="checkbox" class="checkbox" :id="item"/>
          </span>
        </label>         -->
      </li>
    </ul>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox'

export default {
  name: 'List',

  components: {
    Checkbox
  },

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
      type: [String, Array],
      required: false,
      default () {
        if (this.isMultiple) {
          return []
        } else {
          return ''
        }
      }
    }
  },

  methods: {
    isActive (item) {
      if (this.isMultiple) {
        return this.value.indexOf(item) > -1
      } else {
        return item === this.value
      }
    },

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
  }

  & .list__list-item-active {
    color: @green500;
  }

  & .list__checkbox {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    & .list__checkbox-text {
      padding-left: 40px;
    }
  }
}
</style>
