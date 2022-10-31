<template>
    <NuxtLayout name="standard">
        <canvas id="myCanvas" width="400" height="400"></canvas>

        <div v-if="course" class="flex flex-col text-left">
            <span class="capitalize">Title: {{ course.title }}</span>
            <span class="capitalize">category: {{ course.category }}</span>
            <span class="capitalize">description: {{ course.description }}</span>
            <span class="capitalize">type: {{ course.type }}</span>
            <span class="capitalize">location: {{ course.location }}</span>
            <span class="capitalize">coverPath: {{ course.coverPath }}</span>
            <span class="capitalize">instructor: {{ course.instructor }}</span>
            <span class="capitalize">leader: {{ course.leader }}</span>
        </div>
        <div v-else>
            No Certificate
        </div>
    </NuxtLayout>
</template>

<script setup>
import { fabric } from 'fabric';

const email = useCookie('certificate-email')
const { params: { course: coursePath } } = useRoute()

const course = await queryContent('_courses', coursePath).where({
    'students': [{ 'email': email.value }]
}).findOne()

const student = computed( () => course?.students?.find(student => student.email == email.value))


const textConverted = computed(() => {
    let text = course.text
    const metas = text.match(/[^{\}]+(?=})/g)
    metas.forEach(meta => {
        if (meta == "student"){
            text = text.replace(`{${meta}}`, student.value?.name)
        } else {
           console.log(`{${meta}}`, course?.[meta])
           text = text.replace(`{${meta}}`, course?.[meta])
        }
    });
    return text
})


var canvas = new fabric.StaticCanvas('myCanvas');

// fabric.Image.fromURL('/ZainAhmad.jpg', function (oImg) {
//     // scale image down, and flip it, before adding it onto canvas
//     oImg.scale(0.25).set('flipX', true);
//     canvas.add(oImg);
// });

const getSize = (size) => {
    // STANDARD SIZES (DESIGN SHOULD BE IN THIS SIZE (A4))
    const width = 3508
    const height = 2480

    if (size?.width) {
        const ratio = width / height
        return size.width / ratio
    }

    if (size?.height) {
        const ratio = height / width
        return size.height * ratio
    }
}

// BACKGROUND COVER
fabric.Image.fromURL(course.coverPath, function (oImg) {
    const newWidth = 800
    const newHeight = getSize({ width: newWidth})

    oImg.scaleToWidth(newWidth);
    oImg.scaleToHeight(newHeight);
    
    canvas.setDimensions({ width: newWidth, height: newHeight });
    canvas.setBackgroundImage(oImg)
});



/****** TEXT ******/
// LEADER
var text = new fabric.Textbox(course.leader, {
    left: getSize({ width: 765}),
    top: getSize({ height: 675}),
    width: 200,
    fontFamily: 'Tajawal',
    fontSize: 14,
    textAlign: 'center',
    fill: 'rgb(0,200,0)'
});
canvas.add(text);

var text = new fabric.Textbox(course.instructor, {
    left: getSize({ width: 50}),
    top: getSize({ height: 675}),
    width: 200,
    fontFamily: 'Tajawal',
    fontSize: 14,
    textAlign: 'center',
    fill: 'rgb(0,200,0)'
});
canvas.add(text);


var text = new fabric.Textbox(textConverted.value, {
    left: getSize({ width: 150}),
    top: getSize({ height: 300}),
    width: 600,
    fontFamily: 'Tajawal',
    fontSize: 24,
    textAlign: 'center',
    fill: 'rgb(0,200,0)'
});
canvas.add(text);


// canvas.renderAll()


</script>