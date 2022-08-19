<template>
    <nav bg="dark" px="2" w="full" border="b">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <span self="center" mb="4" text="xl mid" font="semibold" whitespace="nowrap">فريق النخبة البرمجي</span>

            <div class="flex md:order-2 ">
                <a href="https://discord.gg/e6E9RQHx" items="center">
                    <div i-jam-discord text="light" mb="5" h="10" w="10"></div>
                </a>
            </div>
            <div class="mb-4 hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky">
                <dl class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0  ">
                    <dt>
                        <a class=" py-2 pr-6 pl-3 ml-8 text-mid rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-light md:p-0 "
                            aria-current="page">الصفحة الرئيسية </a>
                    </dt>
                    <dt>
                        <a
                            class=" py-2 pr-4 pl-3 text-mid rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-light md:p-0 ">المنشورات</a>
                    </dt>
                    <dt>
                        <a
                            class="block py-2 pr-4 pl-3 text-mid rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-light md:p-0 ">المصادر</a>
                    </dt>
                    <dt>
                        <a
                            class="block py-2 pr-4 pl-3 text-mid rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-light md:p-0 ">عن
                            الفريق </a>
                    </dt>
                </dl>
            </div>
        </div>

    </nav>
</template>

<script setup>

</script>