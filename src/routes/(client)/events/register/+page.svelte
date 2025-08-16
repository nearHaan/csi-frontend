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

<div class="min-h-screen w-full max-w-6xl flex max-md:flex-col border-x-1 border-black bg-[#222222]">
    <div class="w-full flex flex-col items-center p-4">
        <h1 class="text-2xl mb-4">Event Name</h1>
        <img class="max-sm:w-80 min-sm:max-w-100 border" alt="Event poster" src="https://csisbtkmce.pythonanywhere.com/static/assets/img/letc.jpg"/>
    </div>
    <div class="w-full flex flex-col items-start justify-start p-4 gap-y-2">
        <div class="flex max-sm:flex-col gap-x-2">
            <h3 class="max-sm:text-md min-sm:text-lg text-[#757575]">Name: </h3>
            <p class="text-lg">Farhaan Nizam</p>
        </div>
        <div class="flex max-sm:flex-col gap-x-2">
            <h3 class="max-sm:text-md min-sm:text-lg text-[#757575]">Email: </h3>
            <p class="text-lg">farhaan.nizam675@gmail.com</p>
        </div>
        <div class="flex max-sm:flex-col gap-x-2">
            <h3 class="max-sm:text-md min-sm:text-lg text-[#757575]">Department: </h3>
            <p class="text-lg">Computer Science</p>
        </div>
        <div class="flex max-sm:flex-col gap-x-2">
            <h3 class="max-sm:text-md min-sm:text-lg text-[#757575]">Batch: </h3>
            <p class="text-lg">B</p>
        </div>
        <div class="flex max-sm:flex-col gap-x-2">
            <h3 class="max-sm:text-md min-sm:text-lg text-[#757575]">Graduation Year: </h3>
            <p class="text-lg">2027</p>
        </div>
    </div>
</div>