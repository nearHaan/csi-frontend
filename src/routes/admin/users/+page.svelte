<script lang="ts">
	import { Search } from '@lucide/svelte';

	//
</script>

<div
	class="flex min-h-screen w-full max-w-6xl flex-col items-center border-x-1 border-black bg-[#222222] p-4 text-white"
>

    <h1 class="text-lg w-full text-left m-4">Manage Users</h1>
	<!-- Search bar -->
	<div class="flex min-h-10 w-full items-center gap-2">
		<input placeholder="Search user" class="h-full w-full rounded bg-[#353535] px-2 py-1" />
		<button class="flex h-full items-center gap-2 rounded bg-[#505050] px-2">
			<p class="text-sm max-sm:hidden">Search</p>
			<Search size="20" />
		</button>
	</div>

	<!-- Main body -->
	<div class="mt-4 w-full overflow-auto border-1 border-black text-[#eeeeee]">
		<table class="table-fixed">
			<thead class="bg-black">
				<tr>
					<th class="min-w-10 border"><input type="checkbox"/></th>
					<th class="test-sm min-w-20 border p-2">UserID</th>
					<th class="test-sm min-w-50 border p-2 text-left">Name</th>
					<th class="test-sm min-w-80 border p-2 text-left">Email</th>
					<th class="test-sm min-w-40 border p-2">Phone number</th>
					<th class="test-sm min-w-50 border p-2">Deapartment</th>
					<th class="test-sm min-w-30 border p-2">Batch</th>
					<th class="test-sm min-w-30 border p-2">Year</th>
				</tr>
			</thead>
			<tbody>
				<tr class="odd:bg-[#353535]">
					<th class="min-w-10 border"><input type="checkbox"/></th>
					<th class="test-sm border p-2">UserID</th>
					<th class="test-sm border p-2 text-left">Name</th>
					<th class="test-sm border p-2 text-left">Email</th>
					<th class="test-sm border p-2">Phone number</th>
					<th class="test-sm border p-2">Deapartment</th>
					<th class="test-sm border p-2">Batch</th>
					<th class="test-sm border p-2">Year</th>
				</tr>
                <tr class="odd:bg-[#353535]">
					<th class="min-w-10 border"><input type="checkbox"/></th>
					<th class="test-sm border p-2">UserID</th>
					<th class="test-sm border p-2 text-left">Name</th>
					<th class="test-sm border p-2 text-left">Email</th>
					<th class="test-sm border p-2">Phone number</th>
					<th class="test-sm border p-2">Deapartment</th>
					<th class="test-sm border p-2">Batch</th>
					<th class="test-sm border p-2">Year</th>
				</tr>
                <tr class="odd:bg-[#353535]">
					<th class="min-w-10 border"><input type="checkbox"/></th>
					<th class="test-sm border p-2">UserID</th>
					<th class="test-sm border p-2 text-left">Name</th>
					<th class="test-sm border p-2 text-left">Email</th>
					<th class="test-sm border p-2">Phone number</th>
					<th class="test-sm border p-2">Deapartment</th>
					<th class="test-sm border p-2">Batch</th>
					<th class="test-sm border p-2">Year</th>
				</tr>
                <tr class="odd:bg-[#353535]">
					<th class="min-w-10 border"><input type="checkbox"/></th>
					<th class="test-sm border p-2">UserID</th>
					<th class="test-sm border p-2 text-left">Name</th>
					<th class="test-sm border p-2 text-left">Email</th>
					<th class="test-sm border p-2">Phone number</th>
					<th class="test-sm border p-2">Deapartment</th>
					<th class="test-sm border p-2">Batch</th>
					<th class="test-sm border p-2">Year</th>
				</tr>
			</tbody>
		</table>
	</div>
</div>
