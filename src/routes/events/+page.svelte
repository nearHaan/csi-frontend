<script lang="ts">
	interface Event {
		id: number;
		title: string;
		subtitle: string;
		date: string;
		time: string;
		location: string;
		fees: number;
		image: string;
	}
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
		<div class="flex w-full justify-center border-y-1 border-black">
			<div class="flex h-20 w-full max-w-6xl items-center justify-start border-x-1 border-black">
				<h2 class="flex h-full items-center justify-center bg-black px-10 text-2xl">
					Upcoming Events
				</h2>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 lg:grid-cols-3">
			{#each upcomingEvents as event (event.id)}
				<div class="z-0 overflow-hidden bg-white shadow-[4px_4px_0_0_black]">
					<div class="h-48 overflow-hidden bg-black">
						<img alt="event-poster" src={event.image} />
					</div>
					<div class="flex flex-col items-center p-4">
						<div class="w-full">
							<h3 class="text-lg font-bold text-gray-800">{event.title}</h3>
							<p class="mb-2 text-sm text-gray-400">{event.subtitle}</p>
							<p class="text-sm text-gray-600">{event.location}</p>
						</div>
						<button
							class="mt-2 ml-2 cursor-pointer bg-[#BFBFBF] p-2 text-black hover:bg-black hover:text-white"
							>Register</button
						>
					</div>
					<div class="flex w-full items-center justify-between bg-[#BFBFBF] p-2 text-black">
						<p class="font-bold">{event.date}</p>
						<p>{event.time}</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}
	{#if pastEvents.length > 0}
		<div class="">
			<div class="flex w-full justify-center border-y-1 border-black">
				<div class="flex h-20 w-full max-w-6xl items-center justify-start border-x-1 border-black">
					<h2 class="flex h-full items-center justify-center bg-black px-10 text-2xl">
						Previous Events
					</h2>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 lg:grid-cols-3">
				{#each pastEvents as event (event.id)}
					<div class="z-0 overflow-hidden bg-white shadow-[4px_4px_0_0_black]">
						<div class="h-48 overflow-hidden bg-black">
							<img alt="event-poster" src={event.image} />
						</div>
						<div class="flex w-full flex-col items-center p-4">
							<h3 class="text-lg font-bold text-gray-800">{event.title}</h3>
							<p class="mb-2 text-sm text-gray-400">{event.subtitle}</p>
							<p class="text-sm text-gray-600">{event.location}</p>
						</div>
						<div class="flex w-full items-center justify-between bg-[#BFBFBF] p-2 text-black">
							<p class="font-bold">{event.date}</p>
							<p>{event.time}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
