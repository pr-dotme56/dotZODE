<script>
	import '../app.postcss';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Header from './Header.svelte';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { AppShell } from '@skeletonlabs/skeleton';
	inject({ mode: dev ? 'development' : 'production' });
	
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Header/>
	</svelte:fragment>

	<slot />
	
</AppShell>



<style lang="postcss">

</style>