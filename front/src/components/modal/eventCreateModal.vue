<template>
    <modal name="eventCreateModal" class="example-modal-content">
        <h1>이벤트 추가</h1>
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
        name: "event-create-modal",
        props: [],
        data() {
            let eventText
            return {
                eventText
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
