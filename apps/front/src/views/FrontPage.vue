<template>
	<div class="home my-40">
		<ul v-if="!error">
			<li v-for="post in posts" :key="post.id">
				<RouterLink :to="post.slug">{{ post.title.rendered }}</RouterLink>
			</li>
		</ul>
		<WpError v-else :error="error" />

		<div class="card card-compact w-96 bg-base-100 shadow-xl">
			<!-- <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> -->
			<div class="card-body">
				<h2 class="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';
import { ref } from "vue";
import WpError from "../components/WpError.vue";

export default {
	name: "HomeView",
	components: {
		WpError,
	},
	// serverPrefetch() {
	// 	const store = useStore(this.$pinia)
	// },
	setup() {
		const posts = ref([]);
		const error = ref(null);

		async function fetchPosts() {
			try {
				// const nonce = 'nonce value';
				// apiFetch.use(apiFetch.createNonceMiddleware(nonce));

				// const token = await apiFetch({
				// 	path: "/wp-json/jwt-auth/v1/token",
				// 	method: "POST",
				// 	data: {
				// 		'username': 'admin',
				// 		'password': 'admin'
				// 	}
				// });
				// console.log(token)
				const frontpage = await apiFetch({ path: "/wp-json/wp/v2/pages" });
				console.log(frontpage)
				// console.log(Object.keys(frontpage.routes))
				posts.value = frontpage
			} catch (e) {
				error.value = e;
			}
		}
		fetchPosts();

		return {
			posts,
			error,
		};
	},
};
</script>
