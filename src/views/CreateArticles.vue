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
        <el-button type="primary" native-type="submit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'CreateArticles',
  data() {
    return {
      article: {
        title:"",
        body: ""
      }
    }
  },
  methods: {
    savaArticle() {
      // console.log(this.article);
      //将文章作为请求体传入新增文章的接口存在数据库里
      this.$http.post("articles",this.article).then(res => {
        this.$message({
          message: '成功创建一则文章',
          type: 'success'
        })
        this.$router.push("/articles/index")
      })
    }
  }
}
</script>

<style scoped>

</style>
