<script>
	import '../app.css';
	import { Menu } from '@lucide/svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>CSI TKMCE</title>
</svelte:head>

<div class="bg-[#222222] font-mono text-white">
	<header
		class="sticky top-0 z-10 flex w-full justify-center border-b-1 border-black bg-transparent backdrop-blur-2xl duration-300 ease-in-out"
	>
		<nav class="flex w-full max-w-6xl justify-between border-x-1 border-black p-5">
			<div class="flex items-center gap-2">
				<img class="h-10 text-white" src="./images/csi_logo.png" alt="organisation" />
			</div>
			<div class="flex cursor-pointer items-center min-sm:hidden">
				<Menu />
			</div>
			<div class="flex items-center max-sm:hidden">
				<ul class="flex gap-5">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/team">Team</a>
					</li>
					<li>
						<a href="/events">Events</a>
					</li>
					<li>
						<a class="text-[#008CFF]" href="/register">Login</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
	<main class="flex h-full justify-center">
		{@render children?.()}
	</main>
	<footer class="border-t-1 border-black bg-[#222222] text-white flex justify-center">
		<div class="flex flex-col justify-center w-full max-w-6xl p-4 border-black border-x-1">
			<div class="min-sm:flex">
				<div class="flex flex-col justify-center">
					<img class="h-20 w-30 text-white" src="./images/csi_logo.png" alt="organisation" />
				</div>
				<div class="flex w-full items-end justify-end gap-4 p-5 max-sm:justify-start">
					<div class="h-6 w-6 rounded bg-[#444444]"></div>
					<div class="h-6 w-6 rounded bg-[#444444]"></div>
					<div class="h-6 w-6 rounded bg-[#444444]"></div>
					<div class="h-6 w-6 rounded bg-[#444444]"></div>
				</div>
			</div>
			<div class="left-20 bg-[#222222] p-2 text-xs text-[#818181]">
				© Copyright CSI TKMCE. All Rights Reserved
			</div>
		</div>
	</footer>
</div>
