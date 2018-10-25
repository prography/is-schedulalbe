<template>
    <div id="labelSection">
        <div class="title">라벨 종류</div>
        <div class="label-elements">
            <div v-for="labelElement in label" v-bind:style="{'color': colorArray[labelElement[0]]}">
                {{labelElement[1]}}
                <div class="label"
                     v-bind:style="{'background-color': colorArray[labelElement[0]]}"></div>
            </div>
        </div>
    </div>
</template>

<script>
    const colorArray = ['#f7bc7c', '#79ccac', '#74abd1', '#ea7575', '#4d4d4d'];

    export default {
    name: 'label-section',
    data () {
        let label = [[1,'할 일'],[2,'회의'],[3,'약속'],[4,'외부미팅']]
        return{
            label,
            colorArray
        }
    }
}
</script>

<style scoped>
    #labelSection{
        padding: 10px;
    }

    @media screen and (min-width: 768px){
        #labelSection{
            max-width: 700px;
            margin: 0 auto;
        }
    }
    .title{
        padding: 15px 0 8px;
        font-size: 18px;
    }
    .label-elements{
        border: 1px solid #e9e9e9;
        padding: 15px 0;
        border-radius: 15px 15px 0 15px;
    }
    .label-elements>div{
        display: inline-block;
        text-align: center;
        margin: 2px 10px;
    }
    .label{
        width: 40px;
        height: 8px;
        border-radius: 4px;
        margin: 2px auto;
    }
</style>