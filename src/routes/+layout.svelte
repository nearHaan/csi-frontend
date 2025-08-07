<script>
	import '../app.css';
	import { Menu } from '@lucide/svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>CSI TKMCE</title>
</svelte:head>

<div class="font-mono bg-[#222222] text-white">
	<header class="bg-transparent backdrop-blur-lg ease-in-out duration-300 top-0 sticky">
		<nav class="flex justify-between p-5">
			<div class="flex items-center gap-2">
				<img class="h-10 text-white" src="./images/csi_logo.png" alt="organisation" />
			</div>
			<div class="flex items-center min-sm:hidden cursor-pointer">
				<Menu/>
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
						<a href="/">Events</a>
					</li>
					<li>
						<a class="text-[#008CFF]" href="/">Login</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
	<main class="h-full">
		{@render children?.()}
	</main>
	<footer class="text-white bg-[#222222] flex flex-col p-4">
		<div class="min-sm:flex">
			<div class="flex flex-col justify-center">
				<img class="h-20 w-30 text-white" src="./images/csi_logo.png" alt="organisation" />
			</div>
			<div class="flex items-end justify-end max-sm:justify-start w-full gap-4 p-5">
				<div class="h-6 w-6 rounded bg-[#444444]"></div>
				<div class="h-6 w-6 rounded bg-[#444444]"></div>
				<div class="h-6 w-6 rounded bg-[#444444]"></div>
				<div class="h-6 w-6 rounded bg-[#444444]"></div>
			</div>
		</div>
		<div class="text-xs p-2 bg-[#222222] text-[#818181] left-20">© Copyright CSI TKMCE. All Rights Reserved</div>
	</footer>
</div>
