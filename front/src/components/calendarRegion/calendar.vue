<template>
    <div id="calendarBody">
        <div class="cal-first-row">
        </div>
        <table>
            <thead>
            <tr>
                <th><div>월</div></th>
                <th><div>화</div></th>
                <th><div>수</div></th>
                <th><div>목</div></th>
                <th><div>금</div></th>
                <th><div class="sat">토</div></th>
                <th><div class="sun">일</div></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="weekEventSet in monthData">
                <td v-for="dayEvent in weekEventSet">
                    <day-element v-if="dayEvent[0]" :date="dayEvent[0]" :schedules="dayEvent[1]" :month="calendarMonth"></day-element>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import dayElement from '@/components/calendarRegion/singleDay'

export default {
    props: ['scheduleset'],
    name: "calendar",
    components: {
        dayElement
    },
    data () {
        return {
            monthData: [
                [
                    [0, []],
                    [1, [[1, '18:00', 'alarm'], [2, '18:00', 'testSchedule text became such a long text for test is test for long text is written in text for test'], [2, '18:00', 'testSchedule'], [2, '18:00', 'testSchedule'], [2, '18:00', 'testSchedule']]],
                    [2, [[1, '18:00', 'alarm'], [2, '18:00', 'testSchedule']]],
                    [3, [[1, '18:00', 'alarm'], [2, '18:00', 'testSchedule']]],
                    [4, [[1, '18:00', 'alarm'], [2, '18:00', 'testSchedule']]],
                    [5, [[1, '18:00', 'alarm'], [2, '18:00', 'testSchedule']]],
                    [6, [[1, '18:00', 'alarm'], [2, '18:00', 'testSchedule']]]
                ],
                [
                    [7, [[1, '18:00', 'alarm'], [1, '18:00', 'testSchedule']]],
                    [8, [[1, '18:00', 'alarm'], [2, '18:00', 'testSchedule']]],
                    [9, [[1, '18:00', 'alarm'], [3, '18:00', 'testSchedule']]],
                    [10, [[1, '18:00', 'alarm'], [4, '18:00', 'testSchedule']]],
                    [11, [[1, '18:00', 'alarm'], [3, '18:00', 'testSchedule']]],
                    [12, [[1, '18:00', 'alarm'], [2, '18:00', 'testSchedule']]],
                    [13, [[1, '18:00', 'alarm'], [1, '18:00', 'testSchedule']]]
                ],
                [
                    [14, [[1, '18:00', 'alarm'], [2, '18:00', 'testSchedule']]],
                    [15, [[1, '18:00', 'alarm'], [3, '18:00', 'testSchedule']]],
                    [16, [[1, '18:00', 'alarm'], [4, '18:00', 'testSchedule']]],
                    [17, [[1, '18:00', 'alarm'], [2, '18:00', 'testSchedule']]],
                    [18, [[1, '18:00', 'alarm'], [3, '18:00', 'testSchedule']]],
                    [19, [[1, '18:00', 'alarm'], [4, '18:00', 'testSchedule']]],
                    [20, [[1, '18:00', 'alarm'], [1, '18:00', 'testSchedule']]]
                ],
                [
                    [21, [[1, '18:00', 'alarm'], [2, '18:00', 'testSchedule']]],
                    [22, [[1, '18:00', 'alarm'], [3, '18:00', 'testSchedule']]],
                    [23, [[1, '18:00', 'alarm'], [4, '18:00', 'testSchedule']]],
                    [24, [[1, '18:00', 'alarm'], [3, '18:00', 'testSchedule']]],
                    [25, [[1, '18:00', 'alarm'], [2, '18:00', 'testSchedule']]],
                    [26, [[1, '18:00', 'alarm'], [3, '18:00', 'testSchedule']]],
                    [27, [[1, '18:00', 'alarm'], [1, '18:00', 'testSchedule']]]
                ],
                [
                    [28, [[4, '18:00', 'alarm'], [4, '18:00', 'testSchedule']]],
                    [29, [[4, '18:00', 'alarm'], [3, '18:00', 'testSchedule']]],
                    [30, [[3, '18:00', 'alarm'], [2, '18:00', 'testSchedule']]],
                    [31, [[2, '18:00', 'alarm'], [1, '18:00', 'testSchedule']]],
                    [0, []],
                    [0, []],
                    [0, []]
                ]
            ],
            calendarMonth: 10
        }
    },
    methods: {
        prevMonth(){

        },
        nextMonth(){

        }
    }
}
</script>

<style scoped>
    #calendarBody {
        font-size: 0;
    }

    #calendarBody > table {
        padding: 0 10px;
        width: 100%;
        border-spacing: 0;
    }

    #calendarBody > table td,
    #calendarBody > table th {
        font-weight: 400;
        border: 1px solid #e9e9e9;
        margin: -1px -1px 0 0;
        padding: 0;
        border-left: none;
    }

    #calendarBody > table th:first-child {
        border-left: 1px solid #e9e9e9;
    }

    #calendarBody > table thead div {
        padding: 15px;
    }

    #calendarBody > table div {
        height: 54px;
        font-size: 16px;
    }

    #calendarBody > table td:first-child {
        border-left: 1px solid #e9e9e9;
    }

    #calendarBody > table td {
        border-top: none;
        width: calc(100% / 7);
        padding-left: 22px;
        text-align: right;
    }
    .sat {
        color: #74abd1;
    }

    .sun {
        color: #ea7575;
    }
</style>
