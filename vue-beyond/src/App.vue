<template>
  <div id="app">
    <Cascader
      :options="options"
      v-model="value"
    />
  </div>
</template>

<script>
import Cascader from "@/components/Cascader";

export default {
  name: "app",

  data() {
    return {
      value: ['安徽', '蚌埠', '龙子湖区', '解放街道'],
      options: [
        {
          label: "安徽",
          value: "安徽",
          children: [
            {
              label: "蚌埠",
              value: "蚌埠",
              children: [
                {
                  label: "龙子湖区",
                  value: "龙子湖区",
                  children: [
                    {
                      label: "解放街道",
                      value: "解放街道",
                    }
                  ]
                },
                {
                  label: "淮上区",
                  value: "淮上区"
                }
              ]
            }
          ]
        },
        {
          label: "北京",
          value: "北京",
          children: [
            {
              label: "顺义区",
              value: "顺义区",
              children: [
                {
                  label: "天竺街道",
                  value: "天竺街道"
                }
              ]
            }
          ]
        },
        {
          label: "深圳",
          value: "深圳",
          children: [
            {
              label: "罗湖区",
              value: "罗湖区"
            }
          ]
        }
      ]
    };
  },

  watch: {
    value() {
      console.log(this.value);
    }
  },

  components: {
    Cascader
  }
};
</script>
