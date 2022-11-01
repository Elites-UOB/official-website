<template>
    <NuxtLayout name="standard">
        <div class="text-center flex flex-col gap-8">
            <div>
                <div class="flex justify-center mb-6">
                    <ColorScheme placeholder="...">
                        <svg class="w-[30%] self-center" viewBox="0 0 156 189" xmlns="http://www.w3.org/2000/svg">
                            <path :class="colorMode.value === 'dark' ? 'fill-light' : 'fill-dark'"
                                d="M76.8455 31.8079L0 0V31.8079L0.000216272 31.8079V63.6157V95.4235V124.874V156.436V156.682L76.8457 189L155.063 156.682V124.874L76.8457 156.682L27.445 136.234V106.783L76.8457 127.231L155.063 95.4235V63.6157L76.8457 95.4235L27.445 74.9756V43.1679L76.8455 63.6157L155.063 31.8079V0L76.8455 31.8079Z" />
                        </svg>
                    </ColorScheme>
                </div>
                <h4 class="text-md md:text-xl">نادي النخبة المطورين</h4>
                <h4 class="text-md md:text-xl">CSIT Elites Developers Club</h4>
                <h1 class="text-2xl md:text-4xl font-semibold my-4">شهادات النخبة</h1>
            </div>


            <div class="flex flex-col">
                <h1 class="text-2xl font-bold text-right mb-2">البحث عن شهادة</h1>
                <div class="relative">
                    <input @keydown.enter="getMyCourses()" v-model="certificateId" class="md:w-[600px] w-[350px] bg-light dark:bg-dark px-4 md:mx--0 md:h-16 h-14 rounded-md
                    flex text-md md:text-xl
                    border-2 border-dark dark:border-light
                    drop-shadow-[4px_4px_0px_#4F009D]" placeholder="رقم الشهادة او البريد الالكتروني للمشارك..." />
                    <Transition>
                        <Icon v-if="isLoading" class="absolute left-2.5 top-2.5" size="40" name="eos-icons:loading" />
                    </Transition>
                </div>

                <div class="flex flex-col mt-8" v-if="myCourses">
                    <h1 class="text-2xl font-bold text-right mb-2">الدورات</h1>
                    <div class="w-full cursor-pointer" v-for="course in myCourses" :key="course._path"
                        @click="selectedCourse = course">
                        <div class="w-full bg-light dark:bg-dark p-3  rounded-md 
                drop-shadow-[2px_2px_0px_#4F009D]
                flex
                border-2 border-dark dark:border-light
                transition ease-in-out hover:-translate-y-1 hover:drop-shadow-[4px_4px_0px_#4F009D] duration-200">
                            <div class=" flex flex-col text-right">
                                <span class="font-semibold text-lg">{{ course.title }}</span>
                                <span class="text-md">{{ course.description }}</span>
                                <span class="text-md">{{ course.date }} - {{ course.instructor }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <!-- MODAL -->
        <Teleport to="body">
            <Transition>
                <div v-if="selectedCourse"
                    class="w-screen h-screen flex items-center justify-center bg-light dark:bg-dark/30 backdrop-blur-sm z-20 fixed">
                    <LazyCertificate class="opacity-90 hover:opacity-100 transition duration-300 delay-75 ease-in-out"
                        ref="certifRef" :course="selectedCourse" />
                </div>
            </Transition>
        </Teleport>
    </NuxtLayout>
</template>

<script setup>
const certificateId = ref("test@gmail.com")
const colorMode = useColorMode()
const isLoading = ref(false)
const certifRef = ref(null)
const myCourses = ref(null)
const selectedCourse = ref(null)

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

onClickOutside(certifRef, (event) => selectedCourse.value = null)


</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>