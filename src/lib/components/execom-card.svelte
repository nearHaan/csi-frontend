<script lang="ts">
	let {
        name = "",
        pos = "",
        social_link = "",
        profile_img = "",
    } : {
        name: string,
        pos: string,
        social_link: string,
        profile_img: string
    } = $props();
</script>

<div class="m-3">
	<div class="h-40 w-40 bg-black">
        <img alt="profile-img" src={profile_img}/>
    </div>
	<h2 class="mt-2 text-sm font-bold text-white">{name}</h2>
	<h3 class="mt-1 text-sm text-[#999999]">{pos}</h3>
</div>
