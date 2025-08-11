<script lang="ts">
	import '../../app.css';
	import { Menu } from '@lucide/svelte';
	let { children, data } = $props();

	let isMenuOpen: boolean = $state(false);

	function toggleMenu(): void {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu(): void {
		isMenuOpen = false;
	}
</script>

<svelte:head>
	<title>CSI TKMCE</title>
</svelte:head>

<div class="bg-[#222222] font-mono text-white">
	<header
		class="sticky top-0 z-10 flex h-20 w-full justify-center border-b-1 border-black bg-transparent backdrop-blur-2xl duration-300 ease-in-out"
	>
		<nav class="flex w-full max-w-6xl justify-between border-x-1 border-black p-5">
			<div class="flex items-center gap-2">
				<img class="h-10 text-white" src="./images/csi_logo.png" alt="organisation" />
			</div>
			<div class="flex cursor-pointer items-center min-sm:hidden">
				<button onclick={toggleMenu} aria-label="Toggle menu">
					<Menu />
				</button>
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
						<a class="text-[#008CFF]" href={!data.student?.name ? '/login' : 'api/logout/'}
							>{!data.student?.name ? 'Login' : 'Logout'}</a
						>
					</li>
				</ul>
			</div>
		</nav>
	</header>
	{#if isMenuOpen}
		<div
			class="fixed inset-0 z-20 bg-[#00000050] min-sm:hidden"
			onclick={closeMenu}
			onkeydown={(e) => e.key === 'Escape' && closeMenu()}
			role="button"
			tabindex="0"
		></div>

		<!-- Mobile menu -->
		<div
			class="fixed top-0 right-0 z-30 h-screen w-64 transform bg-[#222222] shadow-lg transition-transform duration-300 ease-in-out min-sm:hidden"
		>
			<div class="flex h-20 items-center justify-end border-b-1 border-black p-5">
				<button onclick={closeMenu} aria-label="Toggle menu">
					<Menu />
				</button>
			</div>

			<nav class="p-5">
				<ul class="space-y-4">
					<li>
						<a
							href="/"
							class="block py-2 text-lg transition-colors hover:text-gray-300"
							onclick={closeMenu}
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="/team"
							class="block py-2 text-lg transition-colors hover:text-gray-300"
							onclick={closeMenu}
						>
							Team
						</a>
					</li>
					<li>
						<a
							href="/events"
							class="block py-2 text-lg transition-colors hover:text-gray-300"
							onclick={closeMenu}
						>
							Events
						</a>
					</li>
					<li>
						<a
							href={!data.student?.name ? '/login' : '/api/logout/'}
							class="block py-2 text-lg text-[#008CFF] transition-colors hover:text-gray-300"
							onclick={closeMenu}
						>
							{!data.student?.name ? 'Login' : 'Logout'}
						</a>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
	<main class="flex min-h-screen justify-center">
		{@render children?.()}
	</main>
	<footer class="flex justify-center border-t-1 border-black bg-[#222222] text-white">
		<div class="flex w-full max-w-6xl flex-col justify-center border-x-1 border-black p-4">
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
				<a class="w-full text-[10px] text-[#707070]" href="https://storyset.com/technology"
					>Technology illustrations by Storyset</a
				>
				<p class="mt-2">© Copyright CSI TKMCE. All Rights Reserved</p>
			</div>
		</div>
	</footer>
</div>
