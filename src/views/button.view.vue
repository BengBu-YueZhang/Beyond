<template>
  <section>
    <section>
      <Button>
        1111
      </Button>

      <Button type="primary">
        222
      </Button>

      <Button type="success">
        333
      </Button>

      <Button type="warning" loading>
        444
      </Button>

      <Button type="danger">
        555
      </Button>

      <Button type="info">
        666
      </Button>
    </section>

    <section>
      <Button round>
        1111
      </Button>

      <Button type="primary" icon="iconfont icon-loading" round>
        1111
      </Button>

      <Button type="success" round>
        1111
      </Button>

      <Button type="warning" round>
        1111
      </Button>

      <Button type="danger" round>
        555
      </Button>

      <Button type="info" round>
        1111
      </Button>
    </section>

    <section>
      <Button round disabled>
        1111
      </Button>

      <Button type="primary" size="big" disabled>
        1111
      </Button>

      <Button type="success" size="medium" disabled round>
        1111
      </Button>

      <Button type="warning" size="small" disabled round>
        1111
      </Button>

      <Button type="danger" size="small" disabled round>
        1111
      </Button>

      <Button type="info" size="mini" disabled round>
        1111
      </Button>
    </section>

    <section>
      <Button round disabled>
        1111
      </Button>

      <Button type="primary" size="big">
        1111
      </Button>

      <Button type="success" size="medium">
        1111
      </Button>

      <Button type="warning" size="small">
        1111
      </Button>

      <Button type="danger" size="small">
        1111
      </Button>

      <Button type="info" size="mini">
        1111
      </Button>

      <Button type="info" plain>
        1111
      </Button>
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
}
</script>

<style lang="less" scoped>
button {
  margin-right: 20px;
}
section {
  margin-bottom: 20px;
}
</style>
