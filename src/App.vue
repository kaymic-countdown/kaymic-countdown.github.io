<template>
  <div id="app" class="d-flex flex-column">

    <!-- <pre class="text-white">{{ $data }}</pre> -->

    <router-view :key="$route.fullPath"/>

    <nav id="nav" class="mt-auto py-3">
      <ul class="nav nav-pills justify-content-center mb-3">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
      </ul>

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
