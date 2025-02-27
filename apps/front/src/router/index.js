import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home-page",
			// component: HomeView,
			component: () => import(/* webpackChunkName: "home-page" */ "../views/FrontPage.vue"),
		},
		{
			path: "/post/:id",
			name: "Single",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "single" */ "../views/SingleView.vue"),
		},
		{
			path: "/:slug",
			name: "single-page",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "single-page" */ "../views/Single.vue"),
		}
	],
});

export default router;
