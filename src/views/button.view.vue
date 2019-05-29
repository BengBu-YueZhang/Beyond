<template>
  <section>
    <section>
      非圆角按钮
    </section>
    <section>
      <Button>
        默认按钮
      </Button>

      <Button type="primary">
        主要按钮
      </Button>

      <Button type="success">
        成功按钮
      </Button>

      <Button type="warning" >
        警告按钮
      </Button>

      <Button type="danger" >
        危险按钮
      </Button>
      <!-- <Button type="danger" icon="iconfont icon-loading">
      </Button> -->

      <Button type="info">
        信息按钮
      </Button>
    </section>

    <section>
      朴素非圆角按钮
    </section>
    <section>
      <Button plain>
        默认按钮
      </Button>

      <Button type="primary" plain>
        主要按钮
      </Button>

      <Button type="success" plain>
        成功按钮
      </Button>

      <Button type="warning" plain>
        警告按钮
      </Button>

      <Button type="danger" plain>
        危险按钮
      </Button>

      <Button type="info" plain>
        信息按钮
      </Button>
    </section>


    <section>
      圆角按钮
    </section>
    <section>
      <Button round>
        默认按钮
      </Button>

      <Button type="primary" round>
        主要按钮
      </Button>

      <Button type="success" round>
        成功按钮
      </Button>

      <Button type="warning" round>
        警告按钮
      </Button>

      <Button type="danger" round>
        危险按钮
      </Button>

      <Button type="info" round>
        信息按钮
      </Button>
    </section>

    <section>
      朴素圆角按钮
    </section>
    <section>
      <Button round>
        默认按钮
      </Button>

      <Button type="primary" round plain>
        主要按钮
      </Button>

      <Button type="success" round plain>
        成功按钮
      </Button>

      <Button type="warning" round plain>
        警告按钮
      </Button>

      <Button type="danger" round plain>
        危险按钮
      </Button>

      <Button type="info" round plain>
        信息按钮
      </Button>
    </section>


    <section>
      不同大小按钮
    </section>
    <section>
      <Button>
        默认按钮
      </Button>

      <Button size="big">
        大型按钮
      </Button>

      <Button size="medium">
        中型按钮
      </Button>

      <Button size="small">
        小型按钮
      </Button>

      <Button size="mini">
        超小按钮
      </Button>
    </section>

    <section>
      不同大小圆角按钮
    </section>
    <section>
      <Button round>
        默认按钮
      </Button>

      <Button size="big" round>
        大型按钮
      </Button>

      <Button size="medium" round>
        中型按钮
      </Button>

      <Button size="small" round>
        小型按钮
      </Button>

      <Button size="mini" round>
        超小按钮
      </Button>
    </section>


    <section>
      禁用按钮
    </section>
    <section>
      <Button disabled>
        默认按钮
      </Button>

      <Button type="primary" disabled>
        主要按钮
      </Button>

      <Button type="success" disabled>
        成功按钮
      </Button>

      <Button type="warning" disabled>
        警告按钮
      </Button>

      <Button type="danger" disabled>
        危险按钮
      </Button>

      <Button type="info" disabled>
        信息按钮
      </Button>
    </section>


    <section>
      禁用朴素按钮
    </section>
    <section>
      <Button disabled plain>
        默认按钮
      </Button>

      <Button type="primary" disabled plain>
        主要按钮
      </Button>

      <Button type="success" disabled plain>
        成功按钮
      </Button>

      <Button type="warning" disabled plain>
        警告按钮
      </Button>

      <Button type="danger" disabled plain>
        危险按钮
      </Button>

      <Button type="info" disabled plain>
        信息按钮
      </Button>
    </section>

    <section>
      loading
    </section>
    <section>
      <Button loading>
        默认按钮
      </Button>

      <Button type="primary" loading plain>
        主要按钮
      </Button>

      <Button type="success" loading disabled plain>
        成功按钮
      </Button>

      <Button type="warning" loading disabled>
        警告按钮
      </Button>

      <Button type="danger" loading>
        危险按钮
      </Button>

      <Button type="info" loading plain round>
        信息按钮
      </Button>

      <Button type="danger" loading plain round>
        危险按钮
      </Button>
    </section>

    <section>
      icon 信息
    </section>
    <section>
      <Button icon="iconfont icon-loading" v-ripple>
        默认按钮
      </Button>

      <Button type="primary" plain icon="iconfont icon-loading" v-ripple>
        主要按钮
      </Button>

      <Button type="success" plain icon="iconfont icon-loading" v-ripple>
        成功按钮
      </Button>

      <Button type="warning" plain icon="iconfont icon-loading" v-ripple>
        警告按钮
      </Button>

      <Button type="danger" plain icon="iconfont icon-loading" v-ripple>
        危险按钮
      </Button>

      <Button type="info" icon="iconfont icon-loading" v-ripple>
        信息按钮
      </Button>

      <Button type="danger" icon="iconfont icon-loading" v-ripple style="width: 300px;">
        危险按钮
      </Button>
    </section>

    <section>
      v-ripple 水滴波纹效果  默认 color: rgba(0,0,0,0.1)  duration: 800(ms)
    </section>
    <section>
      自定义指令可以是值或者对象格式   为值的时候默认为颜色属性  对象的时候 需要有 color duration字段
    </section>
    <section>
      默认效果
    </section>
    <section>
      <Button type="primary" plain v-ripple>
        主要按钮
      </Button>
      <Button type="primary" v-ripple>
        主要按钮
      </Button>
      <Button type="danger" plain v-ripple>
        危险按钮
      </Button>
      <Button type="danger" v-ripple>
        危险按钮
      </Button>
      <Button type="success" plain v-ripple>
        成功按钮
      </Button>
      <Button type="success" v-ripple>
        成功按钮
      </Button>

    <section>
      自定义颜色和时长
    </section>
    <section>
      <Button type="primary" plain v-ripple="'rgba(255,255,255,0.4)'">
        白色透明按钮
      </Button>
      <Button type="success" plain v-ripple="{color: 'rgba(41, 168, 253,0.6)', duration: 2000}">
        2000 ms 蓝色透明
      </Button>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Button from '../packages/Button';

@Component({
  components: {
    Button,
  },
})
export default class ButtonView extends Vue {
  private btnClick(): void {
    alert('btnClick');
  }

  private startAnimate(e: any): void {
    const ref: any = this.$refs.animate;
    const ref1: any = this.$refs.animate1;
    ref.beginElement();
    ref1.beginElement();
  }
}
</script>

<style lang="less" scoped>
button {
  margin-right: 20px;
  margin-bottom: 20px;
}
section {
  margin-bottom: 20px;
}
</style>
