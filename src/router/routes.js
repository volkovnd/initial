export default [
  {
    path: "/",
    redirect: "/posts",
  },
  {
    path: "/posts",
    name: "posts",
    component: () => import(/* webpackChunkName: "posts-list" */ "@/views/posts/index.vue"),
  },
  {
    path: "/posts/create",
    name: "posts-create",
    component: () => import(/* webpackChunkName: "posts-create" */ "@/views/posts/create.vue"),
  },
  {
    path: "/posts/:id",
    name: "post",
    component: () => import(/* webpackChunkName: "posts-get" */ "@/views/posts/_id.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "@/views/about.vue"),
  },
];
