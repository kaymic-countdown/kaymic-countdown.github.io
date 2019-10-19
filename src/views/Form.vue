<template>
  <form @submit.prevent="countdown" class="container text-center text-light my-auto" action="index.html" method="post">

    <div class="row justify-content-center">
      <div class="col-sm-6">
        <div class="form-group">
          <label for="eventName">What's the Occasion?</label>
          <input id="eventName" type="text" class="form-control form-control-lg" v-model="$parent.eventName" placeholder="Event">
        </div>
      </div>

      <div class="w-100"></div>

      <div class="col-sm-6">
        <div class="form-group">
          <label for="date">Date</label>
          <input id="date" type="date" class="form-control form-control-lg" v-model="$parent.date" placeholder="Date" required>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label for="time">Time</label>
          <input id="time" type="time" class="form-control form-control-lg" v-model="$parent.time" placeholder="Time" required>
        </div>
      </div>
    </div>

    <button type="submit" class="btn btn-outline-primary btn-lg">Initiate Sequence!</button>
  </form>
</template>

<script>
import moment from 'moment'

export default {
  methods: {
    countdown () {
      var stamp = moment(`${this.$parent.date} ${this.$parent.time}`, 'YYYY-MM-DD HH:mm')
      if (!stamp.isValid()) { stamp = moment() }

      let query = {}
      if (this.$parent.eventName) {
        query.name = this.$parent.eventName
      }

      this.$router.push({
        query,
        path: stamp.format('/YYYY/MM/DD/HH/mm')
      })
    }
  }
}
</script>
