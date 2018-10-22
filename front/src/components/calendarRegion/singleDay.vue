<template>
    <div id="singleDayElm" @click="openModal()">
        <span class="date">{{date}}</span>
        <div class="event-region">
            <div
                v-for="eventElm in schedules"
                class="label"
                v-bind:style="{'background-color': colorArray[eventElm[0]]}">
            </div>
        </div>
    </div>
</template>

<script>
const colorArray = ['#f7bc7c', '#79ccac', '#74abd1', '#ea7575', '#4d4d4d'];
export default {
    /* schedules는 데이터 생성용 2D Array 입니다. */
    /* schedules[i]는 해당 날의 i번째 이벤트 정보입니다 */
    /* schedules[i][0]는 이벤트 정보 중 종류입니다 */
    /* schedules[i][1]은 이벤트 시간입니다 */
    /* schedules[i][2]는 이벤트 내용입니다 */
    name: "single-day",
    props: ['month', 'date', 'schedules'],
    methods: {
        openModal(schedules) {
            this.$modal.show('dayEventModal', {
                month: this.month,
                date: this.date,
                scheduleData: this.schedules
            })
        }
    },
    data () {
        return{
            colorArray
        }
    }
}
</script>

<style scoped>
    #singleDayElm{
        position: relative;
        cursor: pointer;
    }
    .date{
        position: absolute;
        left: -15px;
        top: 5px;
    }
    .event-region{
        padding: 4px 6px;
        overflow: hidden;
        line-height: 0.4;
        height: 48px;
    }
    .label{
        display: inline-block;
        margin: 2px 1px;
        text-align: right;
        width: 10px;
        height: 10px;

        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;

        transition: .5s ease-in-out;
    }
</style>