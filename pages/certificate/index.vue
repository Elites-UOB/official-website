<template>
    <NuxtLayout name="standard">
        <div class="text-center flex flex-col gap-8">
            <div>
                <div class="flex justify-center mb-6">
                    <ColorScheme placeholder="...">
                        <svg class="w-[15%] self-center" viewBox="0 0 156 189" xmlns="http://www.w3.org/2000/svg">
                            <path :class="colorMode.value === 'dark' ? 'fill-light' : 'fill-dark'" d="M76.8455 31.8079L0 0V31.8079L0.000216272 31.8079V63.6157V95.4235V124.874V156.436V156.682L76.8457 189L155.063 156.682V124.874L76.8457 156.682L27.445 136.234V106.783L76.8457 127.231L155.063 95.4235V63.6157L76.8457 95.4235L27.445 74.9756V43.1679L76.8455 63.6157L155.063 31.8079V0L76.8455 31.8079Z" />
                        </svg>
                    </ColorScheme>
                </div>
                <h4 class="text-sm md:text-md">نادي النخبة المطورين</h4>
                <h4 class="text-sm md:text-md">CSIT Elites Developers Club</h4>
                <h1 class="text-2xl md:text-3xl font-semibold my-4">شهادات النخبة</h1>
            </div>


            <div class="flex flex-col">
                <h1 class="text-2xl font-bold text-right mb-2">البحث عن شهادة</h1>
                <div class="relative">
                    <input @keydown.enter="getMyCourses()" v-model="certificateId" class="w-[600px] bg-light dark:bg-dark px-3 md:mx--0 h-16
                    flex
                    border-2 border-dark dark:border-light
                    drop-shadow-[4px_4px_0px_#4F009D]" placeholder="رقم الشهادة او البريد الالكتروني للمشارك..." />
                    <Transition>
                        <Icon v-if="isLoading" class="absolute left-2.5 top-2.5" size="40" name="eos-icons:loading" />
                    </Transition>
                </div>

                <div class="flex flex-col mt-8" v-if="myCourses">
                    <h1 class="text-2xl font-bold text-right mb-2">الدورات</h1>
                    <NuxtLink class="w-full" v-for="course in myCourses" :key="course._path" :href="`/certificate/${course.currentStudent?.certificateId}`">
                        <div class="w-full bg-light dark:bg-dark p-3
                drop-shadow-[2px_2px_0px_#4F009D]
                flex
                border-2 border-dark dark:border-light
                transition ease-in-out hover:-translate-y-1 hover:drop-shadow-[4px_4px_0px_#4F009D] duration-200">
                            <div class=" flex flex-col text-right">
                                <span class="font-semibold text-lg">{{ course.title }}</span>
                                <span>{{ course.description }}</span>
                                <span class="text-sm">{{ course.date }} - {{ course.instructor }}</span>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>

        </div>

    </NuxtLayout>
</template>

<script setup>
const certificateId = ref("")
const colorMode = useColorMode()
const isLoading = ref(false)
const myCourses = ref(null)
const getMyCourses = async () => {
    if (certificateId.value.toString().replace(/\s/g, '') == "") return false
    isLoading.value = true
    const certificatedIdString = certificateId.value.toString()

    myCourses.value = (await queryContent('_courses').where({
        'students': {
            $or: [
                [{ 'email': certificatedIdString }],
                [{ 'certificateId': certificatedIdString }]
            ]
        }
    }).find()).map(course => {
        course.currentStudent = course.students.find(student => student.email == certificatedIdString || student.certificateId == certificatedIdString)
        return course
    })
    isLoading.value = false
}


</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>