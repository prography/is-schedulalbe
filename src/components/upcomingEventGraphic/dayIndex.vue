<template>
    <div id="dayIndex" @click="openModal(eventText)">
        <div class="day-color"
             v-bind:style="{'border-color': colorArray[eventType]}"></div>
        <div class="label">
            {{eventDate}}
        </div>
        <div class="event">
            {{eventText}}
        </div>
    </div>
</template>

<script>
const colorArray = ['#f7bc7c', '#79ccac', '#74abd1', '#ea7575', '#4d4d4d'];
export default {
    name: 'day-index',
    props: ["eventType", 'eventDate', 'eventTime', 'eventText'],
    data () {
        return{
            colorArray
        }
    },
    methods: {
        openModal(schedules) {
            this.$modal.show('eventModal', {
                scheduleData: schedules
            })
        }
    }
}
</script>

<style scoped>
    #dayIndex {
        cursor: pointer;
        margin-top: 15px;
        width: calc(40% - 20px);
        margin-left: calc(50% + 15px);
        padding: 10px;
        text-align: left;
        border: 1px solid #808080;
        border-radius: 15px 15px 0 15px;
        word-break: break-all;
    }
    .day-color {
        position: absolute;
        left: calc(50% - 5px);
        width: 10px;
        height: 10px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 2px solid;
        background-color: #fff;
    }

    .label {
        font-size: 14px;
        font-weight: 300;
        color: #4d4d4d;
        margin-bottom: 10px;
    }

    .event {
        font-size: 16px;

    }


    @media screen and (min-width: 768px){
        #dayIndex {
            width: calc(100% - 40px);
            margin-left: 40px;
            min-width: 150px;
        }
        .day-color {
            left: 20px;
        }
    }

</style>