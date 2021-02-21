<template>
  <div>
    <el-form @submit.native.prevent="savaArticle" ref="form" :model="article" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="article.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="article.body"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">确定修改</el-button>
        <el-button @click="cancle">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'EditArticle',
  data() {
    return {
      article: {
        title:"",
        body: ""
      }
    }
  },
  methods: {
    getArticle(){
      this.$http.get(`/articles/${this.$route.params.id}`).then(res => {
        this.article = res.data
      })
    },
    savaArticle() {
      this.$http.put(`articles/${this.$route.params.id}`,this.article).then(res => {
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.$router.push("/articles/index")
      })
    },
    //撤销修改
    cancle(){
      this.$router.push("/articles/index")
    }
  },
  created() {
    //将文章原有内容显示出来
    this.getArticle()
  },
}
</script>

<style scoped>


</style>