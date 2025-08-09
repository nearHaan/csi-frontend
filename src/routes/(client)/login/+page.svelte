<script>
	import { enhance } from "$app/forms";

</script>
<div class="flex min-h-screen w-full flex-col items-center bg-white p-10 text-black">
	<h1 class="text-5xl text-[#222222]">WELCOME BACK</h1>
	<div class="mt-10 min-w-sm border-1 border-black shadow-[4px_4px_0_0_black]">
		<div class="flex w-full justify-between border-b-1 border-black">
			<div class="flex items-center justify-center gap-4 p-4">
				<div class="h-3 w-3 rounded-full bg-red-500"></div>
				<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
				<div class="h-3 w-3 rounded-full bg-green-500"></div>
			</div>
			<h3 class="w-fit bg-[#BFBFBF] p-4">Login</h3>
		</div>
		<form action="?/login" method="post" use:enhance = {() => {
			
		}}>
			<div class="flex w-full flex-col items-center p-4">
				<div class="grid w-full auto-cols-fr grid-cols-[120px_auto] gap-5">
					<p class="text-md w-fit">Email</p>
					<input
						name="email"
						class="h-8 w-full rounded-xs border-1 border-black p-2"
						type="email"
					/>
					<p class="text-md w-fit">Password</p>
					<input
						name="password"
						class="h-8 w-full rounded-xs border-1 border-black p-2"
						type="password"
					/>
				</div>
				<button
					type="submit"
					class="m-4 cursor-pointer border-1 border-black bg-[#D9D9D9] px-6 py-3 ease-in-out hover:bg-black hover:text-white"
				>
					Login
				</button>
			</div>
		</form>
	</div>
</div>
