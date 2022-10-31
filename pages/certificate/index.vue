<template>
    <NuxtLayout name="standard">
        <div class="flex flex-col" v-if="myCourses">
            <!-- {{ myCourses }} -->
            <NuxtLink v-for="course in myCourses" :key="course._path" :to="`/certificate/${course._path.split('/').pop()}`">
                {{ course.title }}
            </NuxtLink>
        </div>
        <div v-else class="flex flex-col">
            <input type="email" v-model="email" />
            <button @click="getMyCourses()">Give me my courses</button>
        </div>
    </NuxtLayout>
</template>

<script setup>
const emailCookie = useCookie('certificate-email')
const email = ref(null)
const myCourses = ref(null)
const getMyCourses = async () => {
    if (email.value.replace(/\s/g, '') == "") return false

    myCourses.value = await queryContent('_courses').where({
        'students': [{'email': email.value}]
    }).find()

    if (myCourses.value.length > 0) {
        emailCookie.value = email.value
    }
}

if (emailCookie.value) {
    email.value = emailCookie.value
    await getMyCourses()
}

</script>