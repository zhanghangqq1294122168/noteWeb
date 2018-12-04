<template>
  <div class="editor">
    <el-form ref="form" :model="formData" label-width="100px">
      <el-form-item>
        <el-input v-model="formData.title" placeholder="无标题笔记" size="small"></el-input>
      </el-form-item>
      <el-form-item>
        <mavon-editor ref=md :model="formData.content" @imgAdd="$imgAdd"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="postSaveArticle">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { saveArticle,imgPost } from "../../api/editor.js";

export default {
    data() {
        return {
            formData: {
                title: "",
                content: ""
            }
        };
    },
    methods: {
        postSaveArticle() {
            saveArticle(this.formData).then(res => {
                if (res.status === 200) {
                    this.$message.success("保存笔记成功");
                } else {
                    this.$message.error("保存笔记失败");
                }
            });
        },
        $imgAdd(pos, $file) {
            const formData = new FormData();
            formData.append('file', $file);
            imgPost(formData).then((url)=>{
              this.$refs.md.$img2Url(pos, url);
            })
        }
    }
};
</script>

<style scoped>
.el-select {
    width: 130px;
}
</style>