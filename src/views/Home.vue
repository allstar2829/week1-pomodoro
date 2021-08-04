<template>
  <timer></timer>
  <list></list>
  <sideBar></sideBar>
</template>

<script>
import sideBar from '@/components/side-bar.vue'
import list from '@/components/list.vue'
import timer from '@/components/timer.vue'

export default {
  name: 'Home',
  components: {
    sideBar,
    list,
    timer
  }
}
</script>
