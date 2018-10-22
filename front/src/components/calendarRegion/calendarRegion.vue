<template>
    <div id="calendarRegion">
      <month-picker></month-picker>
      <calendar></calendar>
    </div>
</template>

<script>
import monthPicker from '@/components/calendarRegion/monthPicker'
import calendar from '@/components/calendarRegion/calendar'
export default {
  name: "calendar-region",
  components: {
    monthPicker,
    calendar
  }
}
</script>

<style scoped>

    @media screen and (min-width: 768px){
        #calendarRegion{
            max-width: 700px;
            margin: 0 auto;
        }
    }

    /*
    @media screen and (min-width: 768px){
        #calendarRegion{
            display: inline-block;
            width: 70%;
            padding: 50px 10%;
        }
    }
    */
</style>
