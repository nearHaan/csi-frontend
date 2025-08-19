<script lang="ts">
	let isCreate = $state(true);

	function toggleMode(title: string){
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
    <div class="mt-2 w-full flex items-center gap-1 rounded-md bg-[#404040] p-1">
        <button onclick={() => {toggleMode('create')}} class="w-full rounded {isCreate?'bg-[#222222]':''} p-1">
			Create Team
		</button>
		<button onclick={() => {toggleMode('join')}} class="w-full rounded {!isCreate?'bg-[#222222]':''} p-1">
			Join Team
		</button>
    </div>
	<div class="flex w-full items-center justify-center">
		<button
			class="m-4 cursor-pointer border-1 border-black bg-[#ffffff] px-6 py-3 text-black ease-in-out hover:bg-black hover:text-white"
		>
			Register
		</button>
	</div>
</div>