<script lang="ts">
	import { Power } from '@lucide/svelte';
</script>

<svelte:head>
	<title>CSI - Computer Society of India</title>
</svelte:head>

<main class="overflow-hidden bg-[#222222] text-white max-w-6xl flex flex-col justify-center">
	<!-- First Section -->
	<section id="hero" class="relative flex min-h-screen flex-col items-center justify-center">
		<div class="flex w-full items-center justify-between border-x-1 border-black">
			<div>
				<svg
					width="111"
					height="130"
					viewBox="0 0 111 130"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0.5 128.221L0.5 1.7793L110.001 65L0.5 128.221Z" fill="#313131" stroke="black" />
				</svg>
			</div>
			<div
				class="flex h-[130px] w-[130px] items-center justify-center rounded-full border-1 border-black bg-[#1B1B1B]"
			>
				<Power />
			</div>
		</div>
		<div class="h-full w-full border-black border-t-1 border-x-1">
			<div class="mx-4 max-md:m-10 flex max-md:flex-col items-center overflow-hidden rounded-4xl min-lg:rounded-4xl bg-[#2D2D2D]">
				<img
					src="https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg"
					class="max-md:w-full min-md:max-w-100 bg-blue-100"
					alt=""
				/>
				<div class="p-8 w-full">
					<h1 class="text-4xl">WELCOME TO CSI</h1>
					<p class="mt-4 text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius dapibus ante at
						interdum. Maecenas elit velit, interdum non congue at, porta eu lorem. Curabitur id sem
						pretium, lacinia diam sit amet, dignissim odio. Pellentesque iaculis arcu id elementum
						facilisis. Etiam sodales id lacus at ornare.
					</p>
					<button class="mt-10 rounded-full bg-[#008CFF] p-3">Ready to join CSI?</button>
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="relative flex min-h-screen flex-col items-center bg-[#222222] border-black border-1">
		<div class="grid w-full grid-cols-3 border-y-1 border-black bg-[#1B1B1B]">
			<div class="col-span-1 w-full bg-[#2D2D2D] px-10 py-4 text-4xl">WHO ARE WE?</div>
			<div class="col-span-2 w-full"></div>
			<div class="col-span-1 w-full"></div>
			<div class="col-span-2 w-full bg-[#2D2D2D] px-10 py-4 text-4xl">
				<p class="text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius dapibus ante at
					interdum. Maecenas elit velit, interdum non congue at, porta eu lorem. Curabitur id sem
					pretium, lacinia diam sit amet, dignissim odio. Pellentesque iaculis arcu id elementum
					facilisis. Etiam sodales id lacus at ornare.
				</p>
			</div>
		</div>
		<div class="my-4 flex items-center marquee-container border-y-1 border-black p-5">
			<div class="marquee-track font-bold text-[#2D2D2D] text-5xl">
				<span>WHAT DO WE DO?</span>
				<span>WHAT DO WE DO?</span>
				<span>WHAT DO WE DO?</span>
				<span>WHAT DO WE DO?</span>
				<span>WHAT DO WE DO?</span>
                <span>WHAT DO WE DO?</span>
				<span>WHAT DO WE DO?</span>
				<span>WHAT DO WE DO?</span>
				<span>WHAT DO WE DO?</span>
				<span>WHAT DO WE DO?</span>
			</div>
		</div>
		<div class="flex max-md:flex-col-reverse h-full items-center justify-center p-5">
			<div class="w-fit my-4 flex">
				<p class="text-lg mx-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius dapibus ante at
					interdum. Maecenas elit velit, interdum non congue at, porta eu lorem. Curabitur id sem
					pretium, lacinia diam sit amet, dignissim odio. Pellentesque iaculis arcu id elementum
					facilisis. Etiam sodales id lacus at ornare.
				</p>
			</div>
			<div class="mx-10 w-100 rounded-full bg-white flex items-center justify-center overflow-hidden">
				<img alt="" src="https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg" />
			</div>
		</div>
	</section>

	<!-- Join Section -->
	<section id="join" class="relative flex min-h-screen items-center justify-center bg-[#22222] border-black border-x-1">
		<div class="relative z-10 text-center">
			<h2 class="mb-12 text-3xl font-light tracking-wider md:text-5xl">
				SO ARE YOU READY TO JOIN CSI?
			</h2>
            <button class="mt-10 rounded-full bg-[#008CFF] py-5 px-10">YES I AM!</button>
		</div>
	</section>
</main>
