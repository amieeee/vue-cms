<template>
  <div>
    <cmtbox :id="$route.params.id"></cmtbox>
  </div>
</template>

<script>

import cmtbox from '../subcomponents/comment.vue'

export default {
  data() {

  },
  methods: {

  },
  components: {
    cmtbox,
  }
}
</script>

<style lang="scss" scoped>
  
</style>