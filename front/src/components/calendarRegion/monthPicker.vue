<template>
  <div id="monthPicker">
    <button v-on:click="lastMonth">
      <img src="../../assets/chevron-left.png">
    </button>
    <span id="year">2018</span>.
    <span id="month">10</span>.
    <button v-on:click="nextMonth">
      <img src="../../assets/chevron-right.png">
    </button>
  </div>
</template>

<script>
export default {
  name: "month-picker",
  methods: {
    lastMonth: function () {
      return 0
    },
    nextMonth: function () {
      return 0
    }
  }
}
</script>

<style scoped>
  #monthPicker{
    font-size: 24px;
    padding: 15px 0;
  }
  button{
    border: none;
    outline: none;
    background-color: transparent;
    height: 24px;
  }
  button>img{
    height: 14px;
  }
</style>
