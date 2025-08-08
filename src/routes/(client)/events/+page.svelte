<script lang="ts">
	import EventCard from "$lib/components/event-card.svelte";
	import type { Event } from "$lib/types";

	const upcomingEvents: Event[] = [
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
	const pastEvents: Event[] = [
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
	<title>Events - CSI TKMCE</title>
</svelte:head>

<div class="min-h-screen max-w-6xl border-x-1 border-black bg-[#222222]">
	{#if upcomingEvents.length > 0}
		<div class="flex w-full justify-center border-b-1 border-black">
			<div class="flex h-20 w-full max-w-6xl items-center justify-start">
				<h2 class="flex h-full items-center justify-center bg-black px-10 text-2xl">
					Upcoming Events
				</h2>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 lg:grid-cols-3">
			{#each upcomingEvents as event (event.id)}
				<EventCard event = {event} isUpcoming = {true}/>
			{/each}
		</div>
	{/if}
	{#if pastEvents.length > 0}
		<div class="">
			<div class="flex w-full justify-center border-y-1 border-black">
				<div class="flex h-20 w-full max-w-6xl items-center justify-start">
					<h2 class="flex h-full items-center justify-center bg-black px-10 text-2xl">
						Previous Events
					</h2>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 lg:grid-cols-3">
				{#each pastEvents as event (event.id)}
					<EventCard event = {event}/>
				{/each}
			</div>
		</div>
	{/if}
</div>
