export default [
  {
    path: "/",
    redirect: "/posts",
  },
  {
    path: "/posts",
    name: "posts",
    component: () => import(/* webpackChunkName: "posts" */ "@/views/posts.vue"),
  },
  {
    path: "/posts/:id",
    name: "post",
    component: () => import(/* webpackChunkName: "post" */ "@/views/post.vue"),

    props: true,
  },
  {
    path: "/about",
    name: "about",

    component: () => import(/* webpackChunkName: "about" */ "@/views/about.vue"),
  },
];
