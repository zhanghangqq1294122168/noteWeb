<template>
    <div class="article">
        <el-aside width="200px">
            <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
            <el-tree
                    class="filter-tree"
                    :data="treeList"
                    :filter-node-method="filterNode"
                    v-model="filterText"
                    ref="foderTree"
                    @node-drop="handleDrop"
            ></el-tree>
        </el-aside>
    </div>
</template>

<script>
    import {folderTreeList} from "../../api/article.js";

    export default {
        watch: {
            filterText(val) {
                this.$refs.foderTree.filter(val);
            }
        },
        methods: {
            InitFolderTree() {
                folderTreeList().then(res => {
                    if (res.data.status === 200) {
                        this.treeList = res.data.data || [];
                    } else {
                        this.$message.error('树查询出错');
                    }
                })
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            }
        },
        created() {
            this.InitFolderTree();
        },
        data() {
            return {
                filterText: '',
                treeList: [],
                // defaultProps: {
                //     children: "children",
                //     label: "label"
                // }
            };
        }
    };
</script>

<style scoped>
</style>