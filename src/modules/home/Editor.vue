<template>
  <div class="editor">
    <el-form ref="form" :model="formData" label-width="100px">
      <el-form-item>
        <el-input v-model="formData.title" placeholder="无标题笔记" size="small"></el-input>
      </el-form-item>
      <el-form-item>
        <mavon-editor :model="formData.content" @imgAdd="$imgAdd"/>
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
        }
        ,
        // 绑定@imgAdd event
        $imgAdd(pos, $file) {
            // 第一步.将图片上传到服务器.
            var formdata = new FormData();
            formdata.append('image', $file);
            imgPost(formdata).then(res=>{
                $mavonEditor.$img2Url(pos, url);
            })
            // axios({
            //     url: 'server url',
            //     method: 'post',
            //     data: formdata,
            //     headers: {'Content-Type': 'multipart/form-data'},
            // }).then((url) => {
            //     // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
            //     // $vm.$img2Url 详情见本页末尾
            //     $vm.$img2Url(pos, url);
            // })
        }
    }
};
</script>

<style scoped>
.el-select {
    width: 130px;
}
</style>