<script lang="ts">
	import type { Event } from '$lib/types';

	const {
		event,
		isUpcoming = false
	}: {
		event: Event;
		isUpcoming?: boolean;
	} = $props();
</script>

<div class="z-0 m-2 overflow-hidden bg-white shadow-[4px_4px_0_0_black]">
	<div class="h-48 overflow-hidden bg-black">
		<img alt="event-poster" src={event.image} />
	</div>
	<div class="flex flex-col items-center p-4">
		<div class="w-full">
			<h3 class="text-lg font-bold text-gray-800">{event.title}</h3>
			<p class="mb-2 text-sm text-gray-400">{event.subtitle}</p>
			<p class="text-sm text-gray-600">{event.location}</p>
		</div>
		{#if isUpcoming}
			<button
				class="mt-2 ml-2 cursor-pointer bg-[#BFBFBF] p-2 text-black hover:bg-black hover:text-white"
				>Register</button
			>
		{/if}
	</div>
	<div class="flex w-full items-center justify-between bg-[#BFBFBF] p-2 text-black">
		<p class="font-bold">{event.date}</p>
		<p>{event.time}</p>
	</div>
</div>
