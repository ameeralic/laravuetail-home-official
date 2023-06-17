<template>
    <div class="bg-zinc-600 h-48 z-50">
        <div class="md:max-w-6xl py-5 mx-auto flex md:flex-row-reverse justify-between px-2 items-center">
            <div
                class="text-white underline underline-offset-4 flex flex-col gap-3 text-sm md:text-base tracking-tighter md:hidden">
                <Link href="/#main" class="cursor-pointer hover:text-tailwind">Home</Link>
                <Link href="/#projects" class="cursor-pointer hover:text-tailwind">Projects</Link>
                <Link href="/about" class="cursor-pointer hover:text-tailwind">About</Link>
                <a href="https://github.com/LaraVueTail" target="_blank"
                    class="cursor-pointer hover:text-tailwind">Github</a>
                <Link href="/vilt-stack " class="cursor-pointer hover:text-tailwind font-bold">
                <span class="text-vue">V</span><span class="text-[#5468ff]">I</span><span class="text-laravel">L</span>
                <span class="text-tailwind">T</span>
                <span class="hidden md:inline-block font-medium underline">Stack</span></Link>
            </div>
            <div>
                <img src="https://laravuetail.com/images/laravuetail-logo.png" alt="" class="h-10 w-10 hidden xl:block">
                <p class="text-sm text-gray-100 font-poppins">
                    2023 &#169; <span class="text-[#ff2d20]">Lara</span><span class="text-[#41b883]">Vue</span><span
                        class="text-[#38bdf8]">Tail</span>
                </p>
                <p class="text-xs text-gray-100 font-poppins font-thin">
                    open source MIT license
                </p>
            </div>
            <!-- <div>
                <div
                    class="text-gray-100 font-poppins text-sm cursor-pointer hover:text-white space-x-3 grid justify-items-end md:justify-items-start md:grid-cols-3"
                >
                    <a href="https://laravuetail.com" class="hover:underline">Projects</a>
                    <a href="https://laravuetail.com/about" class="hover:underline">About</a>
                    <a href="https://github.com/LaraVueTail" class="hover:underline"
                        >Github</a>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script></script>