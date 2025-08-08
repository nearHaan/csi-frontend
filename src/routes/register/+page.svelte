<div class="flex min-h-screen w-full flex-col items-center bg-white p-10 text-black">
	<h1 class="text-5xl text-[#222222]">WELCOME TO CSI</h1>
	<div class="mt-10 min-w-sm border-1 border-black">
		<div class="flex w-full justify-between border-b-1 border-black">
			<div class="flex items-center justify-center gap-4 p-4">
				<div class="h-3 w-3 rounded-full bg-red-500"></div>
				<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
				<div class="h-3 w-3 rounded-full bg-green-500"></div>
			</div>
			<h3 class="w-fit bg-[#BFBFBF] p-4">Register</h3>
		</div>
		<div class="w-full p-4 flex flex-col items-center">
			<div class="w-full grid grid-cols-[120px_auto] auto-cols-fr gap-5">
                <p class="text-md w-fit">Name</p>
                <input class="w-full h-7 border-black border-1 rounded-xl" type="text"/>
                <p class="text-md w-fit">Email</p>
                <input class="w-full h-7 border-black border-1 rounded-xl" type="email"/>
                <p class="text-md w-fit">Batch</p>
                <input class="w-full h-7 border-black border-1 rounded-xl" type="text"/>
                <p class="text-md w-fit">Year</p>
                <input class="w-full h-7 border-black border-1 rounded-xl" type="number"/>
                <p class="text-md w-fit">Phone</p>
                <input class="w-full h-7 border-black border-1 rounded-xl" type="number"/>
                <p class="text-md w-fit">Username</p>
                <input class="w-full h-7 border-black border-1 rounded-xl" type="text"/>
                <p class="text-md w-fit">Password</p>
                <input class="w-full h-7 border-black border-1 rounded-xl" type="password"/>
                <p class="text-md w-fit">Confirm Password</p>
                <input class="w-full h-7 border-black border-1 rounded-xl" type="password"/>
            </div>
            <button class="m-4 px-6 py-3 border-black border-1 bg-[#D9D9D9]">
                Register
            </button>
            <div class="flex justify-center gap-2 text-sm">
                <p>Already have an account?</p>
                <a class="text-[#008CFF]" href="/login">Login Here</a>
            </div>
		</div>
	</div>
</div>
