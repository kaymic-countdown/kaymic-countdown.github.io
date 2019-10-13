<template>
  <form @submit.prevent="countdown" class="container text-center text-light my-auto" action="index.html" method="post">

    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" class="form-control form-control-lg" v-model="$parent.date" placeholder="Date" required>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label for="time">Time</label>
          <input type="time" class="form-control form-control-lg" v-model="$parent.time" placeholder="Time" required>
        </div>
      </div>
    </div>

    <button type="submit" class="btn btn-outline-light btn-lg">Initiate Sequence!</button>
  </form>
</template>

<script>
import moment from 'moment'

export default {
  methods: {
    countdown () {
      var stamp = moment(`${this.$parent.date} ${this.$parent.time}`, 'YYYY-MM-DD HH:mm')
      if (!stamp.isValid()) {
        stamp = moment()
      }
      this.$router.push(stamp.format('/YYYY/MM/DD/HH/mm'))
    }
  }
}
</script>
