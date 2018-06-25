<template>
    <h1>{{ message }}</h1>
</template>

<script>
// 这是一个组件但它并没有绑定到具体的元素
export default {
    name: 'App',
    data () {
        return {
            message: 'Hi! zhenzhen'
        }
    }
}
</script>

<style lang="css">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
