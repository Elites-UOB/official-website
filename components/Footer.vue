<template>

    <footer class="p-4 bg-gray-100 rounded-lg shadow md:px-6 md:py-8 ">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a class="flex items-center mb-4 sm:mb-0">
                <img src="~/assets/CoreTeamLogo.png" class="mr-3 h-8" alt="Flowbite Logo">
                <span class="self-center text-2xl font-semibold whitespace-nowrap ">CSIT Elite</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
                <li>
                    <NuxtLink to="/about"
                            class="mr-4 hover:underline md:mr-6">
                            About
                        </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/PrivacyPolicy"
                            class="mr-4 hover:underline md:mr-6">
                            Privacy Policy
                        </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/licensing"
                            class="mr-4 hover:underline md:mr-6">
                            Licensing
                        </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact"
                            class="mr-4 hover:underline md:mr-6">
                            Contact
                        </NuxtLink>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto">
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 CSIT . All Rights Reserved.
        </span>
    </footer>

</template>