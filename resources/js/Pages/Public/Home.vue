<template>
    <div
        class="h-screen flex flex-col justify-end md:block pb-40 md:pb-0 md:mt-48"
    >
        <div class="-translate-y-1/2 md:translate-y-0">
            <p class="text-gray-300 text-sm tracking-tight mb-10 md:mb-10">
                <span class="text-[#ff2d20] md:text-lg font-medium">Lara</span
                ><span class="text-[#41b883] md:text-lg font-medium">Vue</span
                ><span class="text-[#38bdf8] md:text-lg font-medium">Tail</span>
                is an Open source (MIT License) library of web applications
                built with
                <span class="font-bold">Laravel, Vuejs and TailwindCSS.</span>
            </p>
            <Link href="/projects"
                class="font-ibm flex items-center gap-2 md:gap-3 text-tailwind md:text-gray-200 hover:text-vue cursor-pointer text-2xl md:text-4xl mb-4 md:mb-10 tracking-wider underline underline-offset-8"
            >
                Projects
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                </svg>
            </Link>
            <Link
                href="/about"
                class="font-ibm flex items-center gap-2 md:gap-3 text-tailwind md:text-gray-200 hover:text-vue cursor-pointer text-2xl md:text-4xl mb-4 md:mb-10 tracking-wider underline underline-offset-8"
            >
                About
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                </svg>
            </Link>
            <Link
            href=""
                class="font-ibm flex items-center gap-2 md:gap-3 text-tailwind md:text-gray-200 hover:text-vue cursor-pointer text-2xl md:text-4xl md:mb-5 tracking-wider underline underline-offset-8"
            >
                Github
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                </svg>
            </Link>
        </div>
    </div>

    <p class="text-gray-300 text-sm tracking-tight mb-10 max-w-2xl">
        Carefully harnessed the power of
        <span class="text-laravel">Laravel</span>'s robust backend capabilities,
        combined it with the dynamic frontend functionality of
        <span class="text-vue">Vue.js</span>, and embraced the modern design
        philosophy of <span class="text-tailwind">Tailwind CSS</span>. The
        result is a library that empowers developers to harness the full
        potential of these technologies effortlessly.
    </p>

    <img :src="$page.props.app_url + 'storage/images/meme.png'" alt="" class="h-36 w-auto mb-2" />
    <p class="text-xs md:text-sm text-gray-300 italic mb-10">
        Consider its done!
    </p>

    <p class="text-gray-300 text-sm tracking-tight mb-8 max-w-2xl italic">
        I owe a debt of gratitude to the Laravel, Vue.js, and Tailwind CSS
        communities for their continuous support and inspiration. I encourage
        you to explore <span class="text-[#ff2d20]">Lara</span
        ><span class="text-[#41b883]">Vue</span
        ><span class="text-[#38bdf8]">Tail</span>, experiment with its
        applications, and immerse yourself in the possibilities it unlocks. Your
        feedback is invaluable to me as I strive to refine and expand the
        library further.
    </p>
    <div class="flex items-center space-x-4 mb-10">
        <img
            class="w-14 h-14 rounded-full"
            :src="$page.props.app_url + 'storage/images/ameer.jpg'"
            alt=""
        />
        <div class="font-medium text-gray-200 text-sm">
            <div>C Ameerali</div>
            <p class="text-sm text-gray-300 font-light">
                Full-Stack Developer, <br />Creator of
                <span class="text-[#ff2d20]">Lara</span
                ><span class="text-[#41b883]">Vue</span
                ><span class="text-[#38bdf8]">Tail</span>
            </p>
        </div>
    </div>
</template>
<script></script>
