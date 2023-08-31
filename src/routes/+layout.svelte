<script>
	import '../app.postcss';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Header from './Header.svelte';
	inject({ mode: dev ? 'development' : 'production' });
	
</script>

<div class="app  bg-white dark:bg-slate-800">
	<Header/>
	<main>
		<slot />
	</main>
	<footer>
		<p class="footer text-black dark:text-white">
			Made by Abhinav PR
		</p>
	</footer>
</div>

<style lang="postcss">
	.footer {
		font-family: "Fira Code";
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}
</style>