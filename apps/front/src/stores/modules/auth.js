// const state = {
// 	user: null
// };

// const getters = {
// 	isAuthenticated: (state) => !!state.user,
// 	StateUser: (state) => state.user,
// };


// export default {
// 	state,
// 	getters
// };

// import { ref, computed } from "vue";
// import { defineStore } from "pinia";

// export const useCounterStore = defineStore("counter", () => {
// 	const count = ref(0);
// 	const doubleCount = computed(() => count.value * 2);
// 	function increment() {
// 		count.value++;
// 	}

// 	return { count, doubleCount, increment };
// });


import { defineStore } from 'pinia';

export const useauthStore = defineStore('auth', () => {

	return {
		name: 'wasd'
	}
});
