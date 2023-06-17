<template>
    <Link class="md:flex gap-2 items-center hidden md:my-10 cursor-pointer text-tailwind hover:text-gray-100" href="/#main">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-5 h-5 fill-tailwind text-zinc-900">
        <path stroke-linecap="round" stroke-linejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <p class="text-sm ">Back</p>
    </Link>
    <p class="text-gray-300 text-sm tracking-tight my-10">
        <span class="text-[#ff2d20] md:text-lg font-medium">Lara</span><span
            class="text-[#41b883] md:text-lg font-medium">Vue</span><span
            class="text-[#38bdf8] md:text-lg font-medium">Tail</span> is an Open
        source (MIT License) library of web applications built with
        <span class="font-bold">Laravel, Vuejs and TailwindCSS.</span>
    </p>

    <p class="text-gray-300 text-sm tracking-tight mb-10 max-w-2xl">
        It is with great pleasure and excitement that I introduce you to
        <span class="text-[#ff2d20]">Lara</span><span class="text-[#41b883]">Vue</span><span
            class="text-[#38bdf8]">Tail</span>, a revolutionary library of
        open source web applications crafted with Laravel, Vue.js, and Tailwind
        CSS. As the creator of this project, I am thrilled to bring LaraVueTail
        to developers worldwide and witness the transformative impact it will
        have on the web development landscape.
    </p>
    <p class="text-gray-300 text-sm tracking-tight mb-10 max-w-2xl">
        At LaraVueTail, my mission is to empower developers by providing them
        with a comprehensive toolkit that simplifies the process of building
        cutting-edge web applications. As a full-stack developer, I'm aware of
        the challenges that developers face in today's fast-paced environment,
        where efficiency, scalability, and user experience are paramount. With
        LaraVueTail, we strive to be the catalyst that propels developers
        towards success, enabling them to create remarkable applications in
        record time.
    </p>

    <p class="text-gray-300 text-sm tracking-tight mb-10 max-w-2xl">
        We have carefully harnessed the power of
        <span class="text-laravel">Laravel</span>'s robust backend capabilities,
        combined it with the dynamic frontend functionality of
        <span class="text-vue">Vue.js</span>, and embraced the modern design
        philosophy of <span class="text-tailwind">Tailwind CSS</span>. The
        result is a library that empowers developers to harness the full
        potential of these technologies effortlessly.
    </p>
    <p class="text-gray-300 text-sm tracking-tight mb-8 max-w-2xl font-light italic">
        "I owe a debt of gratitude to the Laravel, Vue.js, and Tailwind CSS
        communities for their continuous support and inspiration. I encourage
        you to explore <span class="text-[#ff2d20]">Lara</span><span class="text-[#41b883]">Vue</span><span
            class="text-[#38bdf8]">Tail</span>, experiment with its
        applications, and immerse yourself in the possibilities it unlocks. Your
        feedback is invaluable to me as I strive to refine and expand the
        library further."
    </p>
    <div class="flex items-center space-x-4 mb-10">
        <img class="w-14 h-14 rounded-full" :src="$page.props.app_url + 'storage/images/ameer.jpg'" alt="" />
        <div class="font-medium text-gray-200 text-sm">
            <div>C Ameerali</div>
            <p class="text-sm text-gray-300 font-light">
                Full-Stack Developer, <br />Creator of
                <span class="text-[#ff2d20]">Lara</span><span class="text-[#41b883]">Vue</span><span
                    class="text-[#38bdf8]">Tail</span>
            </p>
        </div>
    </div>
</template>
<script></script>
