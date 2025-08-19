<script lang="ts">
    let { children } = $props();
</script>

<div
	class="flex w-full min-h-screen items-center max-w-7xl border-x-1 border-black bg-[#222222] max-md:flex-col"
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
	{@render children?.()}
</div>
