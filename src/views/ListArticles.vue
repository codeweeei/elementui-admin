<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="140">
      </el-table-column>
      <el-table-column prop="body" label="内容" width="220">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <!-- scope.row为该行对象 -->
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
export default {
  name:'ListArticles',
  data() {
    return {
      articles:[],
    }
  },
  methods: {
    getArticle(){
      //获取已有文章列表
      this.$http.get("articles").then(res =>{
        this.articles = res.data
      })
    },
    edit(id){
      this.$router.push(`/articles/${id}/edit`)
    },
    remove(id){
      let isRemove = confirm("您确定要删除这篇文章吗？")
      if(isRemove == true){
        //通过文章_id来删除对应文章
        this.$http.delete(`articles/${id}`).then(res =>{
          //删除之后提示
          this.$message({
            message: res.data.message,
            type: 'success'
          })
          this.getArticle()
        })
      }
    },
  },
  created() {
    this.getArticle()
  },
}
</script>

<style scoped>

</style>