<script lang="ts">
	const deptList: string[] = ['Computer Science', 'Electronics and Communication'];
	const batches: string[] = ['A', 'B', 'C'];
	const years: Record<number, string> = {
		1: '1st year',
		2: '2nd year',
		3: '3rd year',
		4: '4th year'
	};
</script>

<div class="flex min-h-screen w-full flex-col items-center bg-white p-10 text-black">
	<h1 class="text-5xl text-[#222222]">WELCOME TO CSI</h1>
	<div class="mt-10 min-w-sm border-1 border-black shadow-[4px_4px_0_0_black]">
		<div class="flex w-full justify-between border-b-1 border-black">
			<div class="flex items-center justify-center gap-4 p-4">
				<div class="h-3 w-3 rounded-full bg-red-500"></div>
				<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
				<div class="h-3 w-3 rounded-full bg-green-500"></div>
			</div>
			<h3 class="w-fit bg-[#BFBFBF] p-4">Register</h3>
		</div>
		<div class="flex w-full flex-col items-center p-4">
			<div class="grid w-full auto-cols-fr grid-cols-[120px_auto] gap-5">
				<p class="text-md w-fit">Name</p>
				<input class="h-8 w-full rounded-xs border-1 border-black p-2" type="text" />
				<p class="text-md w-fit">Email</p>
				<input class="h-8 w-full rounded-xs border-1 border-black p-2" type="email" />
				<p class="text-md w-fit">Department</p>
				<select class="flex h-8 w-full items-center rounded-xs border-1 border-black">
					{#each deptList as dept}
						<option>{dept}</option>
					{/each}
				</select>
				<p class="text-md w-fit">Batch</p>
				<select class="flex h-8 w-full items-center rounded-xs border-1 border-black">
					{#each batches as batch}
						<option>{batch}</option>
					{/each}
				</select>
				<p class="text-md w-fit">Year</p>
				<select class="flex h-8 w-full items-center rounded-xs border-1 border-black">
					{#each Object.entries(years) as [year, yearText](year)}
						<option>{yearText}</option>
					{/each}
				</select>
				<p class="text-md w-fit">Phone</p>
				<input class="h-8 w-full rounded-xs border-1 border-black p-2" type="number" />
				<p class="text-md w-fit">Password</p>
				<input class="h-8 w-full rounded-xs border-1 border-black p-2" type="password" />
				<p class="text-md w-fit">Confirm Password</p>
				<input class="h-8 w-full rounded-xs border-1 border-black p-2" type="password" />
			</div>
			<button
				class="m-4 cursor-pointer border-1 border-black bg-[#D9D9D9] px-6 py-3 ease-in-out hover:bg-black hover:text-white"
			>
				Register
			</button>
			<div class="flex justify-center gap-2 text-sm">
				<p>Already have an account?</p>
				<a class="text-[#008CFF]" href="/login">Login Here</a>
			</div>
		</div>
	</div>
</div>
