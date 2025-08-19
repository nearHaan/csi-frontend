<script lang="ts">
	let isCreate = $state(false);

	function toggleMode(title: string) {
		isCreate = title === 'create';
	}
</script>

<div class="flex w-full flex-col items-start justify-start gap-y-2 p-4">
	<div class="flex gap-x-2 max-sm:flex-col">
		<h3 class="max-sm:text-md text-[#757575] min-sm:text-lg">Event Name:</h3>
		<p class="text-lg">Event Name</p>
	</div>
	<div class="flex gap-x-2 max-sm:flex-col">
		<h3 class="max-sm:text-md text-[#757575] min-sm:text-lg">Name:</h3>
		<p class="text-lg">Farhaan Nizam</p>
	</div>
	<div class="flex gap-x-2 max-sm:flex-col">
		<h3 class="max-sm:text-md text-[#757575] min-sm:text-lg">Email:</h3>
		<p class="text-lg">farhaan.nizam675@gmail.com</p>
	</div>
	<div class="flex gap-x-2 max-sm:flex-col">
		<h3 class="max-sm:text-md text-[#757575] min-sm:text-lg">Department:</h3>
		<p class="text-lg">Computer Science</p>
	</div>
	<div class="flex gap-x-2 max-sm:flex-col">
		<h3 class="max-sm:text-md text-[#757575] min-sm:text-lg">Batch:</h3>
		<p class="text-lg">B</p>
	</div>
	<div class="flex gap-x-2 max-sm:flex-col">
		<h3 class="max-sm:text-md text-[#757575] min-sm:text-lg">Graduation Year:</h3>
		<p class="text-lg">2027</p>
	</div>
	<div class="mt-2 flex w-full items-center gap-1 rounded-md bg-[#404040] p-1">
		<button
			onclick={() => {
				toggleMode('create');
			}}
			class="w-full rounded {isCreate ? 'bg-[#222222]' : ''} p-1"
		>
			Create Team
		</button>
		<button
			onclick={() => {
				toggleMode('join');
			}}
			class="w-full rounded {!isCreate ? 'bg-[#222222]' : ''} p-1"
		>
			Join Team
		</button>
	</div>
	<div class="w-full rounded-lg bg-[#303030] p-2">
		{#if isCreate}
			<form class="flex flex-col items-center">
				<div class="flex w-full flex-col px-2">
					<ul class="ml-4 list-disc space-y-2">
						<li><p>On creating a team, you get a unique team code</p></li>
						<li><p>You will be the team leader</p></li>
						<li><p>Others can use this code to join your team</p></li>
					</ul>
					<label for="email" class="mt-4 mb-2">Enter your team name below:</label>
					<input
						name="email"
						placeholder="Team name"
						class="h-8 w-full rounded bg-[#505050] p-2"
						type="email"
					/>
				</div>
				<div class="flex w-full items-center justify-center">
					<button
						class="m-4 cursor-pointer border-1 border-black bg-[#ffffff] px-6 py-3 text-black ease-in-out hover:bg-[#222222] hover:text-white"
					>
						Pay and Create Team
					</button>
				</div>
			</form>
		{:else}
			<form class="flex flex-col items-center">
				<div class="flex w-full flex-col px-2">
					<label for="email" class="mt-4 mb-2">Enter team code below:</label>
					<div class="flex items-center gap-x-2">
						<input
							name="email"
							placeholder="Team name"
							class="h-8 w-full rounded bg-[#505050] p-2"
							type="email"
						/>
						<button
							class="cursor-pointer rounded bg-[#222222] py-1 px-3"
						>
							Check
						</button>
					</div>
				</div>
				<div class="mt-8 w-full px-2">
					<p class="text-lg">Team members</p>
					<ul class="text-md mt-2 ml-4 list-disc space-y-2">
						<li><p>Team member 1</p></li>
						<li><p>Team member 2</p></li>
						<li><p>Team member 3</p></li>
					</ul>
				</div>
				<div class="flex w-full items-center justify-center">
					<button
						class="m-4 cursor-pointer border-1 border-black bg-[#ffffff] px-6 py-3 text-black ease-in-out hover:bg-[#222222] hover:text-white"
					>
						Join Team
					</button>
				</div>
			</form>
		{/if}
	</div>
</div>
