<template>
  <div id="app" class="d-flex flex-column">

    <!-- <pre class="text-white">{{ $data }}</pre> -->

    <router-view :key="$route.fullPath"/>

    <nav id="nav" class="mt-auto py-3">

      <router-link to="/" class="btn btn-outline-primary btn-sm my-3">Create a Countdown</router-link>

      <div class="text-center small">
        Made with <a href="https://vuejs.org" target="_blank">Vue.js</a> &amp; <a href="https://momentjs.com/" target="_blank">Moment.js</a>
      </div>
    </nav>

  </div>
</template>

<script>
import moment from 'moment'

export default {
  data: () => ({
    eventName: null,
    date: null,
    time: "00:00"
  }),
  methods: {
    now () {
      return moment().format('/YYYY/MM/DD/HH/mm/ss')
    }
  }
}
</script>

<style src="./assets/main.scss" lang="scss"></style>
