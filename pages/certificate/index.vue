<template>
    <NuxtLayout name="standard">
        <div class="flex flex-col" v-if="myCourses">
            <!-- {{ myCourses }} -->
            <NuxtLink v-for="course in myCourses" :key="course._path" :to="`/certificate/${course.currentStudent?.certificateId}`">
                {{ course.title }}
            </NuxtLink>
        </div>
        <div v-else class="flex flex-col">
            <input v-model="certificateId" />
            <button @click="getMyCourses()">Give me my courses</button>
        </div>
    </NuxtLayout>
</template>

<script setup>
const certificateId = ref("")
const myCourses = ref(null)
const getMyCourses = async () => {
    if (certificateId.value.toString().replace(/\s/g, '') == "") return false
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
}


</script>