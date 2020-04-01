<template>
<div>
  <h1>hello, world</h1>
  <div @click="addCount">{{ count }} times</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },

  methods: {
    /**
     * 迭加次数
     */
    addCount() {
      this.count += 1
    }
  }
}
</script>