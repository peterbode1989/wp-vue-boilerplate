<template>
	<article class="single" v-if="postData">
		<!-- {{ this.$route.params }} -->
		<h1>{{ postData.title.rendered }}</h1>
		<!-- <img v-if="postData.image" :src="postData.image" :alt="postData.title.rendered" /> -->
		<div v-html="postData.content.rendered"></div>
	</article>
</template>

<script>
import apiFetch from "@wordpress/api-fetch";

export default {
	name: "single",
	data() {
		return {
			postData: {
				id: null,
				title: "",
				image: "",
				content: "",
			},
		};
	},
	async beforeMount() {
		const post = await apiFetch({
			// path: "/wp-json/wp/v2/posts/1",
			path: "/wp-json/wp/v2/pages?slug=" + this.$route.params.slug,
		});

		if (Array.isArray(post))
			this.postData = post[0]
		else
			this.postData = post;
	},
};
</script>

<style></style>
