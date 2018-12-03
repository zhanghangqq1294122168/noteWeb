<template>
    <el-container class="ui-container">
        <!--导航栏-->
        <el-header class="ui-header">
            <el-menu :default-active="this.$router.path" router class="ui-menu" mode="horizontal">
                <el-menu-item index="/">主页</el-menu-item>
                <!--<el-submenu index="2">-->
                    <!--<template slot="title">技术专栏</template>-->
                    <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
                    <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
                <!--</el-submenu>-->
                <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                    {{ item.navItem }}
                </el-menu-item>
            </el-menu>
        </el-header>
        <!--主页-->
        <el-main class="ui-main">
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </el-main>
        <!--<el-footer>-->
            <!--声明：文章版权属于作者，受法律保护。没有作者书面许可不得转载。若作者同意转载，必须以超链接形式标明文章原始出处和作者。-->
        <!--</el-footer>-->
    </el-container>
</template>

<script>
    import navList from './mock.js';

    export default {
        data() {
            return {
                navList: navList
            };
        },
        methods: {
            // handleSelect(key, keyPath) {
            //     console.log(key, keyPath);
            // }
        }
    }
</script>
<style>
    .ui-main {
        height: 100%;
        overflow: hidden;
        padding-left: 0;
        padding-right: 0;
    }

    .ui-container {
        height: 1500px;
        overflow: hidden;
        position: relative;
    }

    .ui-menu {
        float: right;
    }

    .ui-header {
        padding-left: 0;
        padding-right: 0;
        background-color: #fff;
    }

</style>