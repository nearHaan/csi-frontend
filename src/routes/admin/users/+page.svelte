<script lang="ts">
	import { Search } from "@lucide/svelte";

    //
</script>

<div class="flex min-h-screen w-full max-w-6xl flex-col items-center bg-[#222222] border-x-1 border-black text-white p-4">
    <!-- Search bar -->
    <div class="flex items-center w-full min-h-10 gap-2">
        <input placeholder="Search user" class="w-full h-full py-1 px-2 rounded bg-[#353535]"/>
        <button class="h-full flex items-center gap-2 rounded bg-[#505050] px-2">
            <p class="text-sm max-sm:hidden">Search</p>
            <Search size=20/>
        </button>
    </div>
</div>