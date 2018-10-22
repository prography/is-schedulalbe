<template>
    <modal name="dayEventModal" @before-open="beforeOpen" :width="300" :height="'auto'">
        <div class="modal-label">
            {{month}}월 {{date}}일의 일정
            <button class="modal-close" @click="closeModal()">
                <img src="../../assets/close.png">
            </button>
        </div>
        <div class="daily-event-element" v-for="schedule in scheduleList">
            <div class="daily-event-element-time">
                <div class="color-label" v-bind:style="{'background-color': colorArray[schedule[0]]}"></div>
                {{schedule[1]}}
            </div>
            <div class="daily-event-element-content">
                {{schedule[2]}}
            </div>
        </div>
        <div class="button-set">
            <button class="" type="button" @click="closeModal()">
                확인
            </button>
        </div>
    </modal>
</template>

<script>
    const colorArray = ['#f7bc7c', '#79ccac', '#74abd1', '#ea7575', '#4d4d4d'];

    import Vue from 'vue'
    import VModal from 'vue-js-modal'

    Vue.use(VModal, {
        componentName: "modal",
    });
    export default {
        name: "day-event-modal",
        props: [],
        data() {
            let scheduleList, date, month, eventTime;
            return {
                scheduleList,
                date,
                month,
                eventTime,
                colorArray,
                maxWidth: '300px'
            }
        },
        methods: {
            beforeOpen(event) {
                this.scheduleList = event.params.scheduleData;
                this.date = event.params.date;
                this.month = event.params.month;
            },
            closeModal() {
                this.$modal.hide('dayEventModal')
            }
        }
    }
</script>

<style scoped>
    .modal-label{
        padding: 24px;
        font-size: 18px;
    }
    .modal-close{
        float: right;
        font-size: 24px;
        padding: 12px;
        margin: -12px;
        width: 40px;
        height: 40px;
        border: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
    }
    .modal-close>img{
        width: 100%;
        vertical-align: text-top;
    }
    .daily-event-element{
        padding: 10px 24px;
    }
    .color-label{
        width: 18px;
        height: 18px;
        position: absolute;
        left: 0;
        top: 2px;
        border-radius: 5px;
    }
    .daily-event-element-time{
        position: relative;
        padding: 3px 24px;
    }
    .daily-event-element-content{
        padding: 8px 0 ;
    }
    .button-set{
        padding: 24px;
        text-align: right;
    }
    .button-set>button {
        border: none;
        outline: none;
        cursor: pointer;
        font-family: inherit;
        font-size: 14px;
        text-align: center;
        padding: 4px 12px;
        background-color: #4d4d4d;
        color: #ffffff;
        width: 80px;
        height: 28px;
        border-radius: 14px;
        opacity: 0.9;
        transition: .5s ease;
    }
    .button-set>button:hover {
        opacity: 1
    }

</style>
