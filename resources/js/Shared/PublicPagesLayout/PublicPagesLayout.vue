<template>
    <!-- <Header :projectName="'LMS'" :projectDocsLink="'/docs'" :projectGithubRepo="''"></Header> -->
    <div
        class=" text-white underline underline-offset-4 flex gap-2 text-sm md:text-base tracking-tighter md:hidden justify-between pl-12 pr-4 pt-2">
        <Link href="/#main" class="cursor-pointer hover:text-tailwind">Home</Link>
        <Link class="cursor-pointer hover:text-tailwind" href="/#projects">Projects</Link>
        <Link href="/about" class="cursor-pointer hover:text-tailwind">About</Link>
        <a href="https://github.com/LaraVueTail" target="_blank" class="cursor-pointer hover:text-tailwind">Github</a>
        <Link href="/vilt-stack " class="cursor-pointer hover:text-tailwind font-medium tracking-wider underline">
        <span class="text-vue">V</span><span class="text-[#5468ff]">I</span><span class="text-laravel">L</span>
        <span class="text-tailwind">T</span>
        <span class="hidden md:block font-medium">Stack</span></Link>
    </div>
    <div class="md:w-40 xl:w-64 h-screen fixed top-0">
        <div class="flex justify-end h-full">
            <div>
                <div class="flex justify-end h-full -mt-48">
                    <div class="w-3 md:w-8 bg-laravel h-full flex flex-col justify-end pb-1 md:pb-4">
                        <p class="text-xs md:text-2xl text-white font-bold -rotate-90">
                            Lara
                        </p>
                    </div>
                    <div class="w-3 md:w-8 bg-vue h-full flex flex-col justify-end pb-1 md:pb-4">
                        <p class="text-xs md:text-2xl text-white font-bold -rotate-90">
                            Vue
                        </p>
                    </div>
                    <div class="w-3 md:w-8 bg-tailwind h-full flex flex-col justify-end pb-1 md:pb-4">
                        <p class="text-xs md:text-2xl text-white font-bold -rotate-90">
                            Tail
                        </p>
                    </div>
                </div>
                <div
                    class="h-48 absolute bottom-0 py-4 text-white underline underline-offset-4 hidden md:flex flex-col gap-2 text-sm md:text-base">
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
            </div>
        </div>
    </div>
    <div class="min-h-screen ml-8 md:ml-40 xl:ml-64 px-4 max-w-4xl">
        <slot></slot>
    </div>
    <Footer></Footer>
</template>
<script setup>
// import Header from './Components/Header.vue'
import Footer from "./Components/Footer.vue";
</script>
