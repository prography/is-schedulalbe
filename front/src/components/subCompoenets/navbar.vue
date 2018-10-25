<template>
    <div id="navbar">
      <div class="pagename">
        일정
      </div>
      <button class="add-schedule" @click="createEvent()">
        <img src="../../assets/plus.png">
      </button>
    </div>
</template>

<script>
export default {
  name: "navbar",
    methods: {
      createEvent() {
          this.$modal.show('eventCreateModal')
      }
    }
}
</script>

<style scoped>
  #navbar{
    width: 100%;
    border-bottom-right-radius: 20px;
    height: 60px;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
    position: relative;
  }
  .pagename{
    padding: 15px;
    height: 60px;
    font-size: 24px;
    text-align: center;
  }
  #navbar>button{
    position: absolute;
    right: 0;
    top: 0;
    height: 60px;
    width: 60px;
    padding: 13px 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;

  }
  #navbar>button>img{
    width: 12px;
  }

</style>
