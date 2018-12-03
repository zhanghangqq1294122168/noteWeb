<template>
    <div id="app">
        <index></index>
    </div>
</template>

<script>
    import Index from './modules/index/Index.vue'

    export default {
        name: 'app',
        components: {
            Index
        }
    }
</script>


<style>
    * {
        margin: 0;
        padding: 0;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    html {
        height: 100%;
    }

    #app {
        height: 100%;
        width: 100%;
    }

    body {
        height: calc(100% - 1px);
    }
</style>

