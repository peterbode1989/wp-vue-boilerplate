<script setup>
import { RouterView } from "vue-router";
// import Client from "./includes/wp-auth.js";
// import increment, { useCounterStore } from "./stores/counter.js";
// console.log(useCounterStore, increment)
// import from "./stores/modules/auth.js";
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";

// console.log(Client)

// import apiFetch from "@wordpress/api-fetch";
// // /wp-json/jwt-auth/v1/token

// async function test() {
// 	try {
// 		// const nonce = 'nonce value';
// 		// apiFetch.use(apiFetch.createNonceMiddleware(nonce));

// 		// const token = await apiFetch({
// 		// 	path: "/wp-json/jwt-auth/v1/token",
// 		// 	method: "POST",
// 		// 	data: {
// 		// 		'username': 'admin',
// 		// 		'password': 'admin'
// 		// 	}
// 		// });
// 		// console.log(token)
// 		// const frontpage = await apiFetch({ path: "/wp-json/jwt-auth/v1/token" });
// 		// const frontpage = await apiFetch({ path: "/wp-json" });

// 		await apiFetch({
// 			path: '/wp-json/jwt-auth/v1/token',
// 			method: 'POST',
// 			data: {
// 				username: 'peter',
// 				password: 'admin'
// 			},
// 		}).then((res) => {
// 			console.log(res);

// 			// 	// const frontpage = await apiFetch({
// 			// 	// 	path: "/wp-json/wp/v2/settings",
// 			// 	// 	headers: { Authentication: 'Bearer {res.token}' }
// 			// 	// });
// 			// 	// // console.log(frontpage)
// 		});

// 		const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdGFpbHByZXNzLmxvY2FsIiwiaWF0IjoxNjk1MjM4NDY1LCJuYmYiOjE2OTUyMzg0NjUsImV4cCI6MTY5NTg0MzI2NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.pg3gaLYd3sB6U0p3LXUjKO4CTrwYBziVr1d7Av6FULE"
// 		const frontpage = await apiFetch({
// 			path: "/wp-json/wp/v2/settings",
// 			method: "GET",
// 			headers: { Authentication: `Bearer ${token}` }
// 		});
// 		console.log(frontpage)
// 		// console.log(Object.keys(frontpage.routes))
// 		// posts.value = frontpage
// 	} catch (e) {
// 		// error.value = e;
// 	}
// }
// test();
</script>



<template>
	<!-- <header>
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

		<div class="wrapper">
			<HelloWorld msg="You did it!" />

			<nav>
				<RouterLink to="/">Home</RouterLink>
			</nav>
		</div>
	</header> -->

	<Header></Header>

	<section>
		<RouterView />
	</section>

	<Footer></Footer>
</template>

<style scoped></style>
