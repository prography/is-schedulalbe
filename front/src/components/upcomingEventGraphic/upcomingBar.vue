<template>
    <div id="upcomingBar">
        <div class="upcoming-label">다가오는 일정</div>
        <div class="bar">
            <div class="bar-head"></div>
        </div>
        <day-index v-for="(event, eventIndex) in upcomingEventData"
                   v-bind:key="eventIndex"
                   :eventType="event[0]"
                   :eventDate="event[1]"
                   :eventTime="event[2]"
                   :eventText="event[3]">
        </day-index>
    </div>
</template>

<script>
import dayIndex from '@/components/upcomingEventGraphic/dayIndex'
export default {
    name: 'upcoming-bar',
    components: {
        'day-index': dayIndex
    },
    data () {
        return {
            upcomingEventData: [
                [1, '2018. 10. 17', '13:30', 'upcomingeventtext'],
                [2, '2018. 10. 18', '13:30', 'upcomingeventtext2'],
                [4, '2018. 10. 18', '13:30', 'upcomingeventtext2'],
                [2, '2018. 10. 18', '13:30', 'upcomingeventtext2'],
                [4, '2018. 10. 18', '13:30', 'upcomingeventtext2'],
                [3, '2018. 10. 17', '13:30', 'upcomingeventtext3']
            ]
        }
    }
}
</script>

<style scoped>
    #upcomingBar{
        margin-top: 50px;
        position: relative;
        padding: 10px;
    }
    .upcoming-label{
        font-size: 18px;
        position: absolute;
        top: -40px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .bar{
        background-color: #e9e9e9;
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 2px;
        /* DYNAMIC HEIGHT */
        height: 500px;
    }
    .bar-head{
        border: 3px solid #e9e9e9;
        background-color: #ffffff;
        width: 30px;
        height: 30px;
        margin-right: -10px;
        position: absolute;
        top: -25px;
        left: -14px;
        right: 0;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }

    @media screen and (min-width: 768px){

        #upcomingBar{
            max-width: 700px;
            margin: 60px auto 0;
        }
        .bar{
            background-color: #e9e9e9;
            position: absolute;
            margin-left: 24px;
            margin-right: auto;
            width: 2px;
             /*DYNAMIC HEIGHT*/
            height: 500px;
        }
        .bar-head{
            border: 3px solid #e9e9e9;
            background-color: #ffffff;
            width: 30px;
            height: 30px;
            margin-right: -10px;
            position: absolute;
            top: -25px;
            left: -14px;
            right: 0;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
        }
    }
</style>