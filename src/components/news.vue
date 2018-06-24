<template>
<div>
    <ul class="news">
        <li v-for="item in news">
            {{ item.title }}
        </li>
    </ul>
    <input type="text" v-bind:value="parentData" @change="changeValue">
</div>  
</template>

<script>
    // 这是一个组件但它并没有绑定到具体的元素
    export default {
        data () {
            return {
                news: [
                    {id:1, title: '别了北上广深！北京传来大消息，城市排名巨变！', comments_count: 18},
                    {id:2, title: '河南“飞天大盗”一年偷两百个航班 警方注销千本护照', comments_count: 20},
                    {id:3, title: '杭州公交车到站后却久停不开 背后故事温暖人心', comments_count: 90},
                    {id:4, title: '大妈拾手机索酬不成竟摔碎 法律能怎么办', comments_count: 180},
                ]
            }
        },
        props: ['parentData'],
        methods: {
            changeValue (event) {
                this.$emit('changeData', event.target.value)
            }
        }
    }
</script>

<style lang="css" scoped>
    .news {
        list-style: none;
        margin: 0.5em;
    }
    
</style>