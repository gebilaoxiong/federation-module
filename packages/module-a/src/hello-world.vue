<template>
<div>
  <h1>hello, world</h1>
  <div @click="addtTime">{{ index }} times</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      index: 0
    }
  },

  methods: {
    /**
     * 迭加次数
     */
    addtTime() {
      this.index += 1
    }
  }
}
</script>