<template>
  <div class="container text-center my-auto">

    <!-- <pre class="text-white">{{ $data }}</pre> -->

    <div class="mt-5 text-white">
      <div class="row justify-content-center text-white">
        <div v-if="years" class="col d-flex flex-column">
          <h1 class="text-clock display-4">
            {{ years }}
          </h1>
          {{ (years == 1) ? 'year' : 'years' }}
        </div>
        <div v-if="months" class="col d-flex flex-column">
          <h1 class="text-clock display-4">
            {{ months }}
          </h1>
          {{ (months == 1) ? 'month' : 'months' }}
        </div>
        <div v-if="days" class="col d-flex flex-column">
          <h1 class="text-clock display-4">
            {{ days }}
          </h1>
          {{ (days == 1) ? 'day' : 'days' }}
        </div>
        <div v-if="hours" class="col d-flex flex-column">
          <h1 class="text-clock display-4">
            {{ hours }}
          </h1>
          {{ (hours == 1) ? 'hour' : 'hours' }}
        </div>
        <div v-if="minutes" class="col d-flex flex-column">
          <h1 class="text-clock display-4">
            {{ minutes }}
          </h1>
          {{ (minutes == 1) ? 'minute' : 'minutes' }}
        </div>
        <div class="col d-flex flex-column">
          <h1 class="text-clock display-4">
            {{ seconds }}
          </h1>
          {{ (seconds == 1) ? 'second' : 'seconds' }}
        </div>
      </div>

      <em class="text-muted d-block mt-5">
        {{ hasPast ? 'since' : 'until' }}
      </em>

      <span class="lead text-light">
        {{ date.format('LLLL') }}
      </span>
    </div>

  </div>
</template>

<script>
import moment from 'moment'

export default {
  mounted() {
    setInterval(this.updateTimes, 1000)
  },
  data: () => ({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }),
  computed: {
    date () {
      var y,m,d,h,mi,s

      y = this.$route.params.year
      m = this.$route.params.month || '01'
      d = this.$route.params.date || '01'
      h = this.$route.params.hour || '00'
      mi = this.$route.params.minute || '00'
      s = this.$route.params.second || '00'

      return moment(`${y}-${m}-${d} ${h}:${mi}:${s}`, 'YYYY-MM-DD hh:mm:ss')
    },
    hasPast() {
      return moment().isAfter(this.date)
    }
  },
  methods: {
    updateTimes() {
      let duration = moment.duration( this.hasPast ? moment().diff(this.date) : this.date.diff(moment()) )

      this.years = duration.years()
      this.months = duration.months()
      this.days = duration.days()
      this.hours = duration.hours()
      this.minutes = duration.minutes()
      this.seconds = duration.seconds()
    }
  }
}
</script>
