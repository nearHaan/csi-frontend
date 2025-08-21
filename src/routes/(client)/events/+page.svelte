<script lang="ts">
	import EventCard from "$lib/components/event-card.svelte";
	import type { Event } from "$lib/types";

	const upcomingEvents: Event[] = [
		{
			id: 1,
			name: 'LINKEDIN 101',
			description: 'PROFILE POST OPPORTUNITIES',
			image: 'https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg',
			venue: 'string',
			reg_start_time: '12 OCT 2024',
			reg_end_time: '12 OCT 2024',
			event_start_time: '12 OCT 2024',
			event_end_time: '12 OCT 2024',
			fee_amount: 0,
			status: false,
			max_registrations: 10,
			whatsapp_link: 'string',
			food: false,
			min_team_size: 2,
			max_team_size: 3
		},
		{
			id: 2,
			name: 'LINKEDIN 101',
			description: 'PROFILE POST OPPORTUNITIES',
			image: 'https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg',
			venue: 'string',
			reg_start_time: '12 OCT 2024',
			reg_end_time: '12 OCT 2024',
			event_start_time: '12 OCT 2024',
			event_end_time: '12 OCT 2024',
			fee_amount: 0,
			status: false,
			max_registrations: 10,
			whatsapp_link: 'string',
			food: false,
			min_team_size: 2,
			max_team_size: 3
		},
		{
			id: 3,
			name: 'LINKEDIN 101',
			description: 'PROFILE POST OPPORTUNITIES',
			image: 'https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg',
			venue: 'string',
			reg_start_time: '12 OCT 2024',
			reg_end_time: '12 OCT 2024',
			event_start_time: '12 OCT 2024',
			event_end_time: '12 OCT 2024',
			fee_amount: 0,
			status: false,
			max_registrations: 10,
			whatsapp_link: 'string',
			food: false,
			min_team_size: 2,
			max_team_size: 3
		},
	];
	const pastEvents: Event[] = [
		{
			id: 1,
			name: 'LINKEDIN 101',
			description: 'PROFILE POST OPPORTUNITIES',
			image: 'https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg',
			venue: 'string',
			reg_start_time: '12 OCT 2024',
			reg_end_time: '12 OCT 2024',
			event_start_time: '12 OCT 2024',
			event_end_time: '12 OCT 2024',
			fee_amount: 0,
			status: false,
			max_registrations: 10,
			whatsapp_link: 'string',
			food: false,
			min_team_size: 2,
			max_team_size: 3
		},
		{
			id: 2,
			name: 'LINKEDIN 101',
			description: 'PROFILE POST OPPORTUNITIES',
			image: 'https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg',
			venue: 'string',
			reg_start_time: '12 OCT 2024',
			reg_end_time: '12 OCT 2024',
			event_start_time: '12 OCT 2024',
			event_end_time: '12 OCT 2024',
			fee_amount: 0,
			status: false,
			max_registrations: 10,
			whatsapp_link: 'string',
			food: false,
			min_team_size: 2,
			max_team_size: 3
		},
		{
			id: 3,
			name: 'LINKEDIN 101',
			description: 'PROFILE POST OPPORTUNITIES',
			image: 'https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg',
			venue: 'string',
			reg_start_time: '12 OCT 2024',
			reg_end_time: '12 OCT 2024',
			event_start_time: '12 OCT 2024',
			event_end_time: '12 OCT 2024',
			fee_amount: 0,
			status: false,
			max_registrations: 10,
			whatsapp_link: 'string',
			food: false,
			min_team_size: 2,
			max_team_size: 3
		},
	];
</script>

<svelte:head>
	<title>Events - CSI TKMCE</title>
</svelte:head>

<div class="min-h-screen max-w-7xl w-full border-x-1 border-[#181818] bg-[#222222]">
	{#if upcomingEvents.length > 0}
		<div class="flex w-full justify-center border-b-1 border-[#181818]">
			<div class="flex h-20 w-full max-w-7xl items-center justify-start">
				<h2 class="flex h-full items-center justify-center bg-black px-10 text-2xl">
					Upcoming Events
				</h2>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 lg:grid-cols-3">
			{#each upcomingEvents as event (event.id)}
				<EventCard {event} details = {{ status: 'upcoming'}}/>
			{/each}
		</div>
	{/if}
	{#if pastEvents.length > 0}
		<div class="">
			<div class="flex w-full justify-center border-y-1 border-[#181818]">
				<div class="flex h-20 w-full max-w-7xl items-center justify-start">
					<h2 class="flex h-full items-center justify-center bg-black px-10 text-2xl">
						Previous Events
					</h2>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 lg:grid-cols-3">
				{#each pastEvents as event (event.id)}
					<EventCard {event}/>
				{/each}
			</div>
		</div>
	{/if}
</div>
