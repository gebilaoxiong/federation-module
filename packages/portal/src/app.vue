<template>
  <hello-world/>
</template>

<script>
export default {
  components: {
    HelloWorld: () => import('modulea/HelloWorld')
  }
}
</script>