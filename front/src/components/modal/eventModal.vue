<template>
    <modal name="eventModal" class="example-modal-content" @before-open="beforeOpen">
        <h1>이벤트 관리</h1>
        {{eventText}}
    </modal>
</template>

<script>
    import Vue from 'vue'
    import VModal from 'vue-js-modal'

    Vue.use(VModal, {
        componentName: "modal",
        dynamic: 'true'
    });
    export default {
        name: "eventModal",
        props: [],
        data() {
            let eventText
            return {
                eventText
            }
        },
        methods: {
            beforeOpen(event) {
                this.eventText = event.params.scheduleData;
            }
        }
    }
</script>

<style scoped>

</style>
