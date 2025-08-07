<script lang="ts">
	interface Event {
		id: number;
		title: string;
		subtitle: string;
		date: string;
		time: string;
		location: string;
		image: string;
	}
	const events: Event[] = [
		{
			id: 1,
			title: 'LINKEDIN 101',
			subtitle: 'PROFILE POST OPPORTUNITIES',
			date: '12 OCT 2024',
			time: '8:30 - 9:30pm',
			location: 'G-Meet',
			image: 'https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg'
		},
        {
			id: 2,
			title: 'LINKEDIN 101',
			subtitle: 'PROFILE POST OPPORTUNITIES',
			date: '12 OCT 2024',
			time: '8:30 - 9:30pm',
			location: 'G-Meet',
			image: 'https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg'
		},
        {
			id: 3,
			title: 'LINKEDIN 101',
			subtitle: 'PROFILE POST OPPORTUNITIES',
			date: '12 OCT 2024',
			time: '8:30 - 9:30pm',
			location: 'G-Meet',
			image: 'https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg'
		},
	];
</script>

<svelte:head>
	<title>Events - CSI TKMCE</title>
</svelte:head>

<div class="min-h-screen max-w-6xl bg-[#222222] border-black border-x-1">
	<div class="px-6 py-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each events as event (event.id)}
				<div
					class="overflow-hidden rounded-lg bg-white shadow-lg ease-in-out hover:scale-103 z-0"
				>
					<div class="h-48 overflow-hidden bg-black">
						<img alt="event-poster" src={event.image} />
					</div>
					<div class="p-4">
						<h3 class="text-lg font-bold text-gray-800">{event.title}</h3>
						<p class="text-sm text-gray-600">{event.subtitle}</p>
                        <p class="text-sm text-gray-600">{event.date}</p>
                        <p class="text-sm text-gray-600">{event.time}</p>
                        <p class="text-sm text-gray-600">{event.location}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
