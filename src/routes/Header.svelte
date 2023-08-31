<script>
	import github from '$lib/images/github.svg';
    import { DarkMode } from 'flowbite-svelte';
</script>

<header>
    <div class="corner">
        <DarkMode/>
    </div>
	<h1 class="title text-black dark:text-white">
		Code Generator
	</h1>
	<div class="corner">
		<a href="https://github.com/iamAbhinavPR/Code-Generator.git">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	.title{
		font-size: 45px;
        font-weight: bold;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
	}
    header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
        padding: 5px;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>