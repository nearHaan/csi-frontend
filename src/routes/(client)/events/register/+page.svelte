<script lang="ts">
	//
</script>

<!-- export type Event = {
    id: number;
    title: string;
    subtitle: string;
    date: string;
    time: string;
    location: string;
    fees: number;
    image: string;
} -->

<!-- export type Student = {
    id: number;
    user: {
        id: number;
        email: string;
        is_staff: boolean;
        is_superuser: boolean;
        date_joined: string;
    };
    name: string;
    phone_number: string;
    department: string;
    batch: string;
    year: number;
}; -->

<div
	class="flex min-h-screen w-full max-w-6xl border-x-1 border-black bg-[#222222] max-md:flex-col"
>
	<div class="flex w-full flex-col items-center p-4">
		<img
			class="border max-sm:w-80 min-sm:max-w-100"
			alt="Event poster"
			src="https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg"
		/>
		<p class="mt-4 text-lg min-sm:text-justify">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iure ducimus? Officia
			reiciendis doloremque numquam quaerat incidunt in expedita accusantium hic aliquam suscipit.
			Magni ipsam voluptate, eum excepturi porro doloremque.
		</p>
	</div>
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
		<div class="flex w-full items-center justify-center">
			<button
				class="m-4 cursor-pointer border-1 border-black bg-[#ffffff] text-black px-6 py-3 ease-in-out hover:bg-black hover:text-white"
			>
				Register
			</button>
		</div>
	</div>
</div>
