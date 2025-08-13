<script lang="ts">
	import type { Event } from '$lib/types';

	const {
		event,
		details = {
			status: 'previous',
			isRegistered: false,
			ticketAvailable: false,
			certificateAvailable: false,
		}
	}: {
		event: Event;
		details?: {
			status: 'upcoming' | 'previous' | 'myevent'; //values: upcoming, registered, myevent
			isRegistered?: boolean;
			ticketAvailable?: boolean;
			certificateAvailable?: boolean;
		};
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
		{#if details?.status === 'upcoming'}
			<button
				class="mt-2 ml-2 cursor-pointer bg-[#BFBFBF] p-2 text-black hover:bg-black hover:text-white"
				>Register</button
			>
		{:else if details?.status === 'myevent'}
			<div class="flex max-sm:flex-col w-full justify-center items-center">
				<button
					class="mt-2 min-sm:ml-2 max-sm:w-full cursor-pointer {details.ticketAvailable ? 'bg-[#BFBFBF] text-black hover:bg-black hover:text-white':'bg-[#efefef] text-[#bfbfbf]'} p-2"
					>Ticket</button
				>
				<button
					class="mt-2 min-sm:ml-2 max-sm:w-full cursor-pointer {details.certificateAvailable ? 'bg-[#BFBFBF] text-black hover:bg-black hover:text-white':'bg-[#efefef] text-[#bfbfbf]'} p-2"
					>Certificate</button
				>
			</div>
		{/if}
	</div>
	<div class="flex w-full items-center justify-between bg-[#BFBFBF] p-2 text-black">
		<p class="font-bold">{event.date}</p>
		<p>{event.time}</p>
	</div>
</div>
