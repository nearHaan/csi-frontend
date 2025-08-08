<script>
	import '../../app.css';
	import { Menu } from '@lucide/svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>CSI TKMCE</title>
</svelte:head>

<main>
    {@render children?.()}
</main>
