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
      console.log(this.article);
    }
  }
}
</script>

<style scoped>

</style>
