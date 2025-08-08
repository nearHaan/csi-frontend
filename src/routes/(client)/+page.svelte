<script lang="ts">
	import EventCard from '$lib/components/event-card.svelte';
	import type { Event } from '$lib/types';
	import { Power } from '@lucide/svelte';

	let isLoggedin: boolean = $state(false);
	let isLightOn: boolean = $state(false);

    function toggleLight(): void {
		isLightOn = !isLightOn;
	}

	const myEvents: Event[] = [
		{
			id: 1,
			title: 'LINKEDIN 101',
			subtitle: 'PROFILE POST OPPORTUNITIES',
			date: '12 OCT 2024',
			time: '8:30 - 9:30pm',
			location: 'G-Meet',
			fees: 0,
			image: 'https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg'
		},
		{
			id: 2,
			title: 'LINKEDIN 101',
			subtitle: 'PROFILE POST OPPORTUNITIES',
			date: '12 OCT 2024',
			time: '8:30 - 9:30pm',
			location: 'G-Meet',
			fees: 0,
			image: 'https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg'
		},
		{
			id: 3,
			title: 'LINKEDIN 101',
			subtitle: 'PROFILE POST OPPORTUNITIES',
			date: '12 OCT 2024',
			time: '8:30 - 9:30pm',
			location: 'G-Meet',
			fees: 0,
			image: 'https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg'
		}
	];
</script>

<svelte:head>
	<title>CSI - Computer Society of India</title>
</svelte:head>

<main class="flex w-full max-w-6xl flex-col justify-center overflow-hidden bg-[#222222] text-white">
	<!-- First Section -->
	<section id="hero" class="relative flex min-h-screen flex-col items-center justify-start border-x-1 border-black">
		<div class="flex w-full items-center justify-between border-b-1 border-black">
			<div class="animate-pulse">
				<svg
					width="111"
					height="130"
					viewBox="0 0 111 130"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0.5 128.221L0.5 1.7793L110.001 65L0.5 128.221Z" fill={isLightOn?"#bfbfbf":"#313131"} stroke="black" />
				</svg>
			</div>
			<button
				class="flex h-[130px] w-[130px] items-center justify-center rounded-full border-1 border-black bg-[#1B1B1B]"
				onclick={toggleLight}
			>
				<Power color = {isLightOn ? "#008CFF":"#ffffff"}/>
		</button>
		</div>
		{#if !isLoggedin}
			<div class="h-full w-full">
				<div
					class="mx-4 mt-4 flex items-center overflow-hidden rounded-4xl bg-[#2D2D2D] max-md:m-10 max-md:flex-col min-lg:rounded-4xl"
				>
					<img
						src="https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg"
						class="bg-blue-100 max-md:w-full min-md:max-w-100"
						alt=""
					/>
					<div class="w-full p-8">
						<h1 class="text-4xl">WELCOME TO CSI</h1>
						<p class="mt-4 text-sm">
							The Computer Society of India (CSI) - TKMCE Chapter is a vibrant community of tech
							enthusiasts, developers, and innovators at TKM College of Engineering. As a proud
							extension of India’s premier body of IT professionals, we aim to nurture talent,
							foster creativity, and provide a platform for students to explore and excel in the
							world of technology.
						</p>
						<button class="animate-pulse mt-10 rounded-full bg-[#008CFF] p-3">Ready to join CSI?</button>
					</div>
				</div>
			</div>
		{/if}
		{#if isLoggedin}
			<div class="m-4 p-4 shadow-[4px_4px_0_0_black] border-black border-1">
				<h2 class="text-2xl">My Events</h2>
				<div class="flex flex-col min-sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{#each myEvents as event}
						<EventCard event = {event}/>
					{/each}
				</div>
			</div>
		{/if}
	</section>

	<!-- About Section -->
	{#if !isLoggedin}
		<section
			id="about"
			class="relative flex min-h-screen flex-col items-center border-1 border-black bg-[#222222]"
		>
			<div class="grid w-full grid-cols-3 border-y-1 border-black bg-[#1B1B1B]">
				<div class="col-span-1 w-full bg-[#2D2D2D] px-10 py-4 text-4xl">WHO ARE WE?</div>
				<div class="col-span-2 w-full"></div>
				<div class="col-span-1 w-full"></div>
				<div class="col-span-2 w-full bg-[#2D2D2D] px-10 py-4 text-4xl">
					<p class="text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius dapibus ante at
						interdum. Maecenas elit velit, interdum non congue at, porta eu lorem. Curabitur id sem
						pretium, lacinia diam sit amet, dignissim odio. Pellentesque iaculis arcu id elementum
						facilisis. Etiam sodales id lacus at ornare.
					</p>
				</div>
			</div>
			<div class="marquee-container my-4 flex items-center border-y-1 border-black p-5">
				<div class="{isLightOn?"marquee-track":""} text-5xl font-bold text-[#2D2D2D]">
					<span>WHAT DO WE DO?</span>
					<span>WHAT DO WE DO?</span>
					<span>WHAT DO WE DO?</span>
					<span>WHAT DO WE DO?</span>
					<span>WHAT DO WE DO?</span>
					<span>WHAT DO WE DO?</span>
					<span>WHAT DO WE DO?</span>
					<span>WHAT DO WE DO?</span>
					<span>WHAT DO WE DO?</span>
					<span>WHAT DO WE DO?</span>
				</div>
			</div>
			<div class="flex h-full w-full items-center justify-center p-5 max-md:flex-col-reverse">
				<div class="my-4 flex w-full">
					<p class="mx-2 w-full text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius dapibus ante at
						interdum. Maecenas elit velit, interdum non congue at, porta eu lorem. Curabitur id sem
						pretium, lacinia diam sit amet, dignissim odio. Pellentesque iaculis arcu id elementum
						facilisis. Etiam sodales id lacus at ornare.
					</p>
				</div>
				<div
					class="mx-10 flex max-w-100 items-center justify-center overflow-hidden rounded-full bg-white"
				>
					<img alt="" src="https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg" />
				</div>
			</div>
		</section>

		<!-- Join Section -->
		<section
			id="join"
			class="relative flex items-center justify-center border-x-1 border-black bg-[#22222] py-20"
		>
			<div class="relative z-10 text-center">
				<h2 class="mb-12 text-3xl font-light tracking-wider md:text-5xl">
					SO ARE YOU READY TO JOIN CSI?
				</h2>
				<button class="mt-10 rounded-full bg-[#008CFF] px-10 py-5">YES I AM!</button>
			</div>
		</section>
	{/if}
</main>
