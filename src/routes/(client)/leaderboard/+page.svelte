<script lang="ts">
	import EventCard from '$lib/components/event-card.svelte';
	import type { Event } from '$lib/types';

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
	<title>LeaderBoard - CSI TKMCE</title>
</svelte:head>

<div class="min-h-screen w-full max-w-7xl border-x-1 border-[#181818] bg-[#222222]">
	<section id="leaderboard" class="border-x-1 border-[#181818] p-4">
		<div class="m-4 flex flex-col border-1 border-[#181818] shadow-[4px_4px_0_0_[#181818]]">
			<h2 class="p-4 text-2xl">LeaderBoard</h2>
			<div class="overflow-auto border-t-1 border-[#181818]">
				<table>
					<thead>
						<tr>
							<th scope="col" class="px-6">Rank</th>
							<th scope="col" class="w-full px-6 py-3 text-left">Name</th>
							<th scope="col" class="px-6 py-3">Points</th>
						</tr>
					</thead>
					<tbody class="text-center">
						<tr class="odd:bg-[#313131] even:bg-[#454545]">
							<td class="">1</td>
							<td class="px-6 py-3 text-left">Farhaan</td>
							<td class="px-6 py-3">25</td>
						</tr>
						<tr class="odd:bg-[#313131] even:bg-[#454545]">
							<td class="">1</td>
							<td class="px-6 py-3 text-left">Farhaan</td>
							<td class="px-6 py-3">25</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>
</div>
