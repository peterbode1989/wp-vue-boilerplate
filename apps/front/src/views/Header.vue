<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
	<!-- <nav>
		<RouterLink to="/">Home</RouterLink>
	</nav> -->

	<div class="navbar bg-white dark:bg-primary">
		<div class="navbar-start">
			<ul class="menu lg:menu-horizontal bg-base-200 rounded-box">
				<li>
					<RouterLink to="/">Home</RouterLink>
				</li>
				<li>
					<RouterLink to="/sample-page">Sample Page</RouterLink>
				</li>
				<li class="static">
					<details>
						<summary>Parent item</summary>
						<ul class="menu-horizontal start-0 end-0">
							<li>
								<a>Solutions</a>
								<ul>
									<li><a>Design</a></li>
									<li><a>Development</a></li>
									<li><a>Hosting</a></li>
									<li><a>Domain register</a></li>
								</ul>
							</li>
							<li>
								<a>Solutions</a>
								<ul>
									<li><a>Design</a></li>
									<li><a>Development</a></li>
									<li><a>Hosting</a></li>
									<li><a>Domain register</a></li>
								</ul>
							</li>
							<li>
								<a>Solutions</a>
								<ul>
									<li><a>Design</a></li>
									<li><a>Development</a></li>
									<li><a>Hosting</a></li>
									<li><a>Domain register</a></li>
								</ul>
							</li>
						</ul>
					</details>
				</li>
				<li><a>Item 3</a></li>
			</ul>
			<!-- <div class="dropdown static">
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
					</svg>
				</label>
				

				<ul tabindex="0"
					class="menu menu-sm menu-horizontal top-6 start-0 end-0 dropdown-content mt-8 z-[1] p-2 shadow bg-white rounded-box">
					<li>
						<a>Solutions</a>
						<ul>
							<li><a>Design</a></li>
							<li><a>Development</a></li>
							<li><a>Hosting</a></li>
							<li><a>Domain register</a></li>
						</ul>
					</li>
					<li>
						<a>Enterprise</a>
						<ul>
							<li><a>CRM software</a></li>
							<li><a>Marketing management</a></li>
							<li><a>Security</a></li>
							<li><a>Consulting</a></li>
						</ul>
					</li>
					<li>
						<a>Products</a>
						<ul>
							<li><a>UI Kit</a></li>
							<li><a>Wordpress themes</a></li>
							<li><a>Wordpress plugins</a></li>
							<li>
								<a>Open source</a>
								<ul>
									<li><a>Auth management system</a></li>
									<li><a>VScode theme</a></li>
									<li><a>Color picker app</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a>Company</a>
						<ul>
							<li><a>About us</a></li>
							<li><a>Contact us</a></li>
							<li><a>Privacy policy</a></li>
							<li><a>Press kit</a></li>
						</ul>
					</li>
				</ul>
			</div> -->
		</div>
		<div class="navbar-center">
			<a class="btn btn-ghost normal-case text-xl">daisyUI</a>
		</div>
		<div class="navbar-end">
			<button class="btn btn-ghost btn-circle">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
					stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</button>
			<button class="btn btn-ghost btn-circle">
				<div class="indicator">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
					</svg>
					<span class="badge badge-xs badge-primary indicator-item"></span>
				</div>
			</button>
		</div>
	</div>
</template>