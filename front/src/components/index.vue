<template>
    <div>
        <navbar-custom></navbar-custom>
        <calendar-region></calendar-region>
        <label-section></label-section>
        <upcoming-event></upcoming-event>
        <day-event-modal></day-event-modal>
        <event-modal></event-modal>
        <event-create-modal></event-create-modal>
    </div>
</template>

<script>
    import navbar from "@/components/subCompoenets/navbar"
    import calendarRegion from "@/components/calendarRegion/calendarRegion"
    import dayEventModal from "@/components/modal/dayEventModal";
    import eventModal from "@/components/modal/eventModal";
    import upcomingEvent from "@/components/upcomingEventGraphic/upcomingBar";
    import EventCreateModal from "@/components/modal/eventCreateModal";
    import labelSection from "@/components/labelManager/labelSection";

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            EventCreateModal,
            labelSection,
            'day-event-modal': dayEventModal,
            'event-modal': eventModal,
            'navbar-custom': navbar,
            'calendar-region': calendarRegion,
            'upcoming-event': upcomingEvent
        },
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
