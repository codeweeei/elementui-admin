import Vue from "vue"
import VueRouter from "vue-router"
import CreateArticles from "../views/CreateArticles.vue"
import ListArticles from "../views/ListArticles.vue"
import EditArticle from "../views/EditArticle.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "ListArticles",
    redirect: "/articles/index",
  },
  {
    path: "/articles/create",
    name: "CreateArticles",
    component: CreateArticles,
  },
  {
    path: "/articles/index",
    name: "ListArticles",
    component: ListArticles,
  },
  {
    path: "/articles/:id/edit",
    name: "EditArticle",
    component: EditArticle,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
