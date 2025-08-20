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
	<div class="w-full aspect-3/2 overflow-hidden bg-black">
		<img alt="event-poster" src={event.image} />
	</div>
	<div class="flex flex-col items-center p-4">
		<div class="w-full">
			<h3 class="text-lg font-bold text-gray-800">{event.name}</h3>
			<p class="mb-2 text-sm text-gray-400">{event.description}</p>
			<p class="text-sm text-gray-600">{event.venue}</p>
		</div>
		{#if details?.status === 'upcoming'}
			<button
				class="mt-2 max-sm:ml-2 "
				><a href={`/events/register/event?id=${event.id}`} class="cursor-pointer bg-[#BFBFBF] p-2 text-black hover:bg-black hover:text-white">Register</a></button
			>
		{:else if details?.status === 'myevent'}
			<div class="flex min-sm:gap-2 max-sm:flex-col w-full justify-center items-center">
				<button
					class="mt-2 max-sm:w-full cursor-pointer {details.ticketAvailable ? 'bg-[#BFBFBF] text-black hover:bg-black hover:text-white':'bg-[#efefef] text-[#bfbfbf]'} p-2"
					>Ticket</button
				>
				<button
					class="mt-2 max-sm:w-full cursor-pointer {details.certificateAvailable ? 'bg-[#BFBFBF] text-black hover:bg-black hover:text-white':'bg-[#efefef] text-[#bfbfbf]'} p-2"
					>Certificate</button
				>
			</div>
		{/if}
	</div>
	<div class="flex w-full items-center justify-between bg-[#BFBFBF] p-2 text-black">
		<p class="font-bold">{event.event_start_time}</p>
		<p>{event.event_end_time}</p>
	</div>
</div>
