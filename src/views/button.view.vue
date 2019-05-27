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
      <Button icon="iconfont icon-loading">
        默认按钮
      </Button>

      <Button type="primary" plain icon="iconfont icon-loading">
        主要按钮
      </Button>

      <Button type="success" plain icon="iconfont icon-loading">
        成功按钮
      </Button>

      <Button type="warning" plain icon="iconfont icon-loading">
        警告按钮
      </Button>

      <Button type="danger" plain icon="iconfont icon-loading">
        危险按钮
      </Button>

      <Button type="info" icon="iconfont icon-loading">
        信息按钮
      </Button>

      <Button type="danger" icon="iconfont icon-loading">
        危险按钮
      </Button>
    </section>
    <svg>
      <rect x="0" y="0" width="200" height="150" fill="#FFFF00" stroke="blue" stroke-width="5" />
      <text x="15" y="45" font-size="24" fill="red">some text</text>	
    </svg>

    <svg>
      <rect x="0" y="0" width="200" height="100" fill="red"/>
      <ellipse cx="100" cy="50" rx="100" ry="50" fill="blue"/>
    </svg>
    <hr>
    <svg>
      <path d="M 0 0 L 100 100, 200 0, 400 200, 500 500"
        stroke="black" fill="none" stroke-width="5"/>
    </svg>
    <hr>
    <svg>
      <path d="M 0 0 L 100 100" stroke="black"
        stroke-width="12"/>
        <line x1="0" y1="100" x2="100" y2="0"
        stroke-width="2" stroke="black" />
    </svg>
    <hr>
    <svg>
      <path d="M 20 40 C 100 -30 180 90 20 160 L 120 160" stroke="black" fill="none" stroke-width="5"/>
    </svg>
    <hr>
    <svg>
      <circle r="50" cx="100" cy="100"/>
      <line x1="5" y1="5" stroke="red" x2="90" y2="90" />
    </svg>

    <hr>
    <svg>
      <circle r="50" cx="100" cy="70" fill="none"  stroke="#579" stroke-width="10" stroke-dasharray="3, 5, 8, 13, 15, 18"/>
      <line x1="5" y1="5" stroke="red" x2="90" y2="90"/>
    </svg>
    <hr>
    <svg>
      <path stroke="black" d="M 0 0 L 100 100"/>
    </svg>
    <hr>
    <svg>
      <path d="M 44 44 L 100 100 0 50" stroke="#579"/>
      <!-- <path d="M 0 0 L 100 100 0 75"/> -->
    </svg>

    <hr>
    <svg style="width: 300px; height: 100px;">
      <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1"/>
      <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
          <animate attributeName="r" from="15" to="400" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
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
