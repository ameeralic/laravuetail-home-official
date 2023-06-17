<template>
    <div class="h-screen flex flex-col justify-end -mt-56 md:-mt-48" id="main">
        <div class="">
            <p class="text-gray-300 text-sm tracking-tight max-w-2xl mb-10">
                <span class="text-[#ff2d20] text-5xl md:text-8xl xl:text-9xl font-medium tracking-tighter">Lara</span><span
                    class="text-[#41b883] text-5xl md:text-8xl xl:text-9xl font-medium tracking-tighter">Vue</span><span
                    class="text-[#38bdf8] text-5xl md:text-8xl xl:text-9xl font-medium tracking-tighter">Tail</span><br />
                An Open source (MIT License) library of web applications
                built with<br />
                <span class="font-bold flex gap-3">
                    <a href="https://laravel.com/" target="_blank">
                        <span class="text-[#ff2d20] flex gap-1 items-center cursor-pointer hover:underline">
                            <img src="https://asset.brandfetch.io/ide68-31CH/idhaVMa0Af.svg" alt="" class="h-4 w-auto" />
                            Laravel
                        </span>
                    </a>
                    <a href="https://vuejs.org/" target="_blank">
                        <span class="text-[#41b883]  flex gap-1 items-center cursor-pointer hover:underline">
                            <img src="https://asset.brandfetch.io/idT-7aLCAj/idYSAxBM8n.svg" alt=""
                                class="h-3 w-auto" />Vue.js</span>
                    </a>
                    <a href="https://tailwindcss.com/" target="_blank">
                        <span class="text-[#38bdf8] flex gap-1 items-center cursor-pointer hover:underline">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt=""
                                class="h-4 w-auto" />Tailwind
                            CSS</span>
                    </a>
                </span>
            </p>
            <Link href="#projects"
                class="flex items-center gap-2 md:gap-3 text-tailwind md:text-gray-200 hover:text-vue cursor-pointer text-sm md:text-4xl mb-4 md:mb-10 tracking-normal underline underline-offset-8 hover:tracking-widest">
            Projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </Link>
            <Link href="/about"
                class="flex items-center gap-2 md:gap-3 text-tailwind md:text-gray-200 hover:text-vue cursor-pointer text-sm md:text-3xl mb-4 md:mb-10 tracking-normal underline underline-offset-8 hover:tracking-widest">
            About
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </Link>
            <a href="https://github.com/LaraVueTail" target="_blank"
                class="flex items-center gap-2 md:gap-3 text-tailwind md:text-gray-200 hover:text-vue cursor-pointer text-sm md:text-xl mb-2 md:mb-5 tracking-normal underline underline-offset-8 hover:tracking-widest">
                Github
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </a>
        </div>
    </div>
    <div id="projects" class="min-h-screen grid place-content-center py-20">
        <Link class="flex gap-2 items-center mb-4 cursor-pointer text-tailwind hover:text-gray-100" href="#main"
            data-aos="zoom-in-up" data-aos-offset="200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 h-5 fill-tailwind text-zinc-900">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-sm ">Back</p>
        </Link>


        <h1 class=" underline-offset-4 decoration-double decoration-1 decoration-tailwind
        text-white
        text-2xl
        underline
        w-fit
        mb-10
      " data-aos="zoom-in-up" data-aos-offset="200">
            Projects
        </h1>
        <div class="grid md:grid-cols-2 mb-10 place-content-center md:place-content-start w-fit gap-10 md:px-2"
            data-aos="zoom-in-up" data-aos-offset="200">
            <div class="flex gap-4 md:gap-10">
                <a href="http://lms.laravuetail.com" target="_blank"
                    class="grid place-content-center justify-items-center rounded-2xl w-32 h-32 border border-[#41b883]/10 hover:bg-black/50 hover:shadow-[#38bdf8] hover:border-[#38bdf8] hover:border-2 shadow-lg hover:shadow-xl shadow-[#41b883] bg-black/30">
                    <img class="w-10 h-10 mr-2" :src="$page.props.app_url + 'storage/images/lms-logo.svg'" alt="logo" />
                    <p class="text-sm md:text-sm font-medium text-gray-100">LVTLearn</p>

                </a>
                <div class="grid justify-items-start content-center w-1/2">
                    <a href="http://lms.laravuetail.com" target="_blank"
                        class="text-sm md:text-base font-medium text-vue hover:text-tailwind">
                        LVTLearn</a>
                    <p class="text-xs md:text-sm font-light text-gray-100">Learning Management System (LMS)</p>
                    <p class="text-xs md:text-sm font-medium text-gray-100"><span class="text-vue">V</span><span
                            class="text-[#5468ff]">I</span><span class="text-laravel">L</span>
                        <span class="text-tailwind">T</span>
                        <span class="ml-1">Stack</span>
                    </p>
                    <a href="http://lms.laravuetail.com" target="_blank"
                        class="text-xs font-light text-gray-100 bg-vue rounded-full px-3 py-1 my-2 cursor-pointer hover:bg-tailwind shadow-vue hover:shadow-lg hover:shadow-tailwind">
                        Learn more ></a>
                </div>
            </div>

            <div class="flex gap-4 md:gap-10">
                <a href="http://ecommerce.laravuetail.com" target="_blank"
                    class="grid place-content-center justify-items-center rounded-2xl w-32 h-32 border border-[#41b883]/10 hover:bg-black/50 hover:shadow-[#38bdf8] hover:border-[#38bdf8] hover:border-2 shadow-lg hover:shadow-xl shadow-[#41b883] bg-black/30">
                    <img class="w-10 h-10 mr-2" :src="$page.props.app_url + 'storage/images/ecommerce-logo.svg'"
                        alt="logo" />
                    <p class="text-sm md:text-sm font-medium text-gray-100">LVTShop</p>

                </a>
                <div class="grid justify-items-start content-center w-1/2">
                    <a href="http://ecommerce.laravuetail.com" target="_blank"
                        class="text-sm md:text-base font-medium text-vue hover:text-tailwind">
                        LVTShop</a>
                    <p class="text-xs md:text-sm font-light text-gray-100">E-commerce website with stripe payment</p>
                    <p class="text-xs md:text-sm font-medium text-gray-100"><span class="text-vue">V</span><span
                            class="text-[#5468ff]">I</span><span class="text-laravel">L</span>
                        <span class="text-tailwind">T</span>
                        <span class="ml-1">Stack</span>
                    </p>
                    <a href="http://ecommerce.laravuetail.com" target="_blank"
                        class="text-xs font-light text-gray-100 bg-vue rounded-full px-3 py-1 my-2 cursor-pointer hover:bg-tailwind shadow-vue hover:shadow-lg hover:shadow-tailwind">
                        Learn more ></a>
                </div>
            </div>

            <div class="flex gap-4 md:gap-10">
                <a href="http://blog.laravuetail.com" target="_blank"
                    class="grid place-content-center justify-items-center rounded-2xl w-32 h-32 border border-[#41b883]/10 hover:bg-black/50 hover:shadow-[#38bdf8] hover:border-[#38bdf8] hover:border-2 shadow-lg hover:shadow-xl shadow-[#41b883] bg-black/30">
                    <img class="w-10 h-10 mr-2" :src="$page.props.app_url + 'storage/images/blog-logo.svg'" alt="logo" />
                    <p class="text-sm md:text-sm font-medium text-gray-100">LVTBlog</p>

                </a>
                <div class="grid justify-items-start content-center w-1/2">
                    <a href="http://blog.laravuetail.com" target="_blank"
                        class="text-sm md:text-base font-medium text-vue hover:text-tailwind">
                        LVTBlog</a>
                    <p class="text-xs md:text-sm font-light text-gray-100">Blogging Web Application</p>
                    <p class="text-xs md:text-sm font-medium text-gray-100"><span class="text-vue">V</span><span
                            class="text-[#5468ff]">I</span><span class="text-laravel">L</span>
                        <span class="text-tailwind">T</span>
                        <span class="ml-1">Stack</span>
                    </p>
                    <a href="http://blog.laravuetail.com" target="_blank"
                        class="text-xs font-light text-gray-100 bg-vue rounded-full px-3 py-1 my-2 cursor-pointer hover:bg-tailwind shadow-vue hover:shadow-lg hover:shadow-tailwind">
                        Learn more ></a>
                </div>
            </div>

            <div class="flex gap-4 md:gap-10">
                <a href="http://cms.laravuetail.com" target="_blank"
                    class="grid place-content-center justify-items-center rounded-2xl w-32 h-32 border border-[#41b883]/10 hover:bg-black/50 hover:shadow-[#38bdf8] hover:border-[#38bdf8] hover:border-2 shadow-lg hover:shadow-xl shadow-[#41b883] bg-black/30">
                    <img class="w-10 h-10 mr-2" :src="$page.props.app_url + 'storage/images/cms-logo.svg'" alt="logo" />
                    <p class="text-sm md:text-sm font-medium text-gray-100">LVTCMS Tools</p>

                </a>
                <div class="grid justify-items-start content-center w-1/2">
                    <a href="http://cms.laravuetail.com" target="_blank"
                        class="text-sm md:text-base font-medium text-vue hover:text-tailwind">
                        LVTCMS Tools</a>
                    <p class="text-xs md:text-sm font-light text-gray-100">Usefull code snippets for creating CMS with
                        VILT
                    </p>
                    <p class="text-xs md:text-sm font-medium text-gray-100"><span class="text-vue">V</span><span
                            class="text-[#5468ff]">I</span><span class="text-laravel">L</span>
                        <span class="text-tailwind">T</span>
                        <span class="ml-1">Stack</span>
                    </p>
                    <a href="http://cms.laravuetail.com" target="_blank"
                        class="text-xs font-light text-gray-100 bg-vue rounded-full px-3 py-1 my-2 cursor-pointer hover:bg-tailwind shadow-vue hover:shadow-lg hover:shadow-tailwind">
                        Learn more ></a>
                </div>
            </div>
        </div>


    </div>



    <p class="text-gray-300 text-sm tracking-tight mb-10 max-w-2xl" data-aos="zoom-in" data-aos-offset="200">
        Carefully harnessed the power of
        <span class="text-laravel">Laravel</span>'s robust backend capabilities,
        combined it with the dynamic frontend functionality of
        <span class="text-vue">Vue.js</span>, and embraced the modern design
        philosophy of <span class="text-tailwind">Tailwind CSS</span>. The
        result is a library that empowers developers to harness the full
        potential of these technologies effortlessly.
    </p>

    <img :src="$page.props.app_url + 'storage/images/meme.png'" alt="" class="h-auto w-1/2 mb-2" data-aos="zoom-in-up"
        data-aos-offset="200" />
    <p class="text-xs md:text-sm text-gray-300 mb-10" data-aos="zoom-in-up" data-aos-offset="200">
        Consider its done!
    </p>

    <p class="text-gray-300 text-sm tracking-tight mb-8 max-w-2xl font-light italic" data-aos="zoom-in-up"
        data-aos-offset="200">
        "I owe a debt of gratitude to the Laravel, Vue.js, and Tailwind CSS
        communities for their continuous support and inspiration. I encourage
        you to explore <span class="text-[#ff2d20]">Lara</span><span class="text-[#41b883]">Vue</span><span
            class="text-[#38bdf8]">Tail</span>, experiment with its
        applications, and immerse yourself in the possibilities it unlocks. Your
        feedback is invaluable to me as I strive to refine and expand the
        library further."
    </p>
    <div class="flex items-center space-x-4 mb-10" data-aos="zoom-in-up" data-aos-offset="200">
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
<script>
</script>

