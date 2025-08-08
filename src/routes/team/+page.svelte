<script lang="ts">
	import ExecomCard from '$lib/components/execom-card.svelte';
	import type { ExecomList } from '$lib/types';

	let execom_list: ExecomList = {
		'Admin Team': [
			{
				id: 1,
				name: 'Raihan Rasheed',
				position: 'Chair',
				social_link: '',
				profile_link: ''
			},
			{
				id: 2,
				name: 'Raihan Rasheed',
				position: 'Chair',
				social_link: '',
				profile_link: ''
			},
			{
				id: 3,
				name: 'Raihan Rasheed',
				position: 'Chair',
				social_link: '',
				profile_link: ''
			},
			{
				id: 4,
				name: 'Raihan Rasheed',
				position: 'Chair',
				social_link: '',
				profile_link: ''
			}
		],
        'Tech Team': [
			{
				id: 1,
				name: 'Raihan Rasheed',
				position: 'Chair',
				social_link: '',
				profile_link: ''
			},
			{
				id: 2,
				name: 'Raihan Rasheed',
				position: 'Chair',
				social_link: '',
				profile_link: ''
			},
			{
				id: 3,
				name: 'Raihan Rasheed',
				position: 'Chair',
				social_link: '',
				profile_link: ''
			},
			{
				id: 4,
				name: 'Raihan Rasheed',
				position: 'Chair',
				social_link: '',
				profile_link: ''
			}
		],
	};
</script>

<div class="flex w-full flex-col items-center">
	<div
		class="flex h-40 w-full max-w-6xl items-center justify-center border-x-1 border-b border-black"
	>
		<h1 class="text-5xl">MEET OUR TEAM</h1>
	</div>
	{#each Object.entries(execom_list) as [section, members]}
		{#if section !== 'Admin Team'}
			<div class="flex w-full justify-center border-y-1 border-black">
				<div class="flex h-20 w-full max-w-6xl items-center justify-start border-x-1 border-black">
					<h2 class="flex h-full items-center justify-center bg-black px-10 text-2xl">
						{section.toLocaleUpperCase()}
					</h2>
				</div>
			</div>
		{/if}
		<div
			class="mx-auto grid w-full max-w-6xl grid-cols-2 place-items-center justify-center gap-2 border-x-1 border-black p-5 sm:grid-cols-3 md:grid-cols-4"
		>
			{#each members as member (member.id)}
				<ExecomCard
					id={member.id}
					name={member.name}
					pos={member.position}
					social_link={member.social_link}
					profile_img={member.profile_link}
				/>
			{/each}
		</div>
	{/each}
</div>
