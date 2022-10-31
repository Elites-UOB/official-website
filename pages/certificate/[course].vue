<template>
    <NuxtLayout name="standard">
        <div v-if="course" class="flex flex-col text-left">
            <button class="w-fit" @click="downloadCertificate()">تحميل</button>
            <canvas id="myCanvas" width="1814" height="1398"></canvas>
            <canvas class="hidden" ref="qrCode" id="qrCode" width="200" height="200"></canvas>
        </div>
        <div v-else>
            No Certificate
        </div>
    </NuxtLayout>
</template>

<script setup>
import { fabric } from 'fabric';
import bwipjs from 'bwip-js';

const qrCode = ref(null)



const { params: { course: certificateId } } = useRoute()

const course = await queryContent('_courses').where({
    'students': [{ 'certificateId': certificateId }]
}).findOne()

const student = computed(() => course?.students?.find(student => student.certificateId == certificateId))


const textConverted = computed(() => {
    let text = course.text
    const metas = text.match(/[^{\}]+(?=})/g)
    metas.forEach(meta => {
        if (meta == "student") {
            text = text.replace(`{${meta}}`, student.value?.name)
        } else {
            //    console.log(`{${meta}}`, course?.[meta])
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
    const width = 1814
    const height = 1398

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
    const width = 1814
    const height = 1398
    const ratio = width / height
    const newWidth = 850
    const newHeight = newWidth / ratio



    oImg.scaleToWidth(newWidth);
    oImg.scaleToHeight(newHeight);

    canvas.setDimensions({ width: newWidth, height: newHeight });
    canvas.setBackgroundImage(oImg)
    canvas.imageSmoothingEnabled = false;
    canvas.webkitImageSmoothingEnabled = false;
    canvas.mozImageSmoothingEnabled = false;
    canvas.msImageSmoothingEnabled = false;
    canvas.oImageSmoothingEnabled = false;
});



/****** TEXT ******/
// Title
var text = new fabric.Textbox(course.title, {
    left: 75,
    top: 125,
    width: 600,
    fontFamily: 'Tajawal',
    fontSize: 32,
    textAlign: 'left',
    fill: 'rgb(255,255,255)'
});
canvas.add(text);

// Kind
var text = new fabric.Textbox(course.kind, {
    left: 75,
    top: 165,
    width: 600,
    fontFamily: 'Tajawal',
    fontSize: 24,
    textAlign: 'left',
    fill: 'rgb(255,255,255)'
});
canvas.add(text);

// Student Name
var text = new fabric.Textbox(student.value?.name, {
    left: 75,
    top: 285,
    width: 600,
    fontFamily: 'Tajawal',
    fontSize: 48,
    textAlign: 'left',
    fill: 'rgb(0,0,0)',
    fontWeight: '500'
});
canvas.add(text);

// Text
var text = new fabric.Textbox(textConverted.value, {
    left: 75,
    top: 355,
    width: 350,
    fontFamily: 'Tajawal',
    fontSize: 18,
    textAlign: 'left',
    fill: 'rgb(0,0,0)',
});
canvas.add(text);

// Date
var text = new fabric.Textbox(`on ${course.date}`, {
    left: 75,
    top: 410,
    width: 200,
    fontFamily: 'Tajawal',
    fontSize: 18,
    textAlign: 'left',
    fill: 'rgb(0,0,0)',
});
canvas.add(text);


// LEADER
var text = new fabric.Textbox(course.leader, {
    left: 542.5,
    top: 567.5,
    width: 300,
    fontFamily: 'Tajawal',
    fontSize: 18,
    textAlign: 'center',
    fill: 'rgb(0,0,0)',
    fontWeight: '500'
});
canvas.add(text);

// Leader Signature
fabric.Image.fromURL(course.leaderSignature, function (oImg) {
    oImg.scaleToHeight(75);
    oImg.setPositionByOrigin(new fabric.Point(695, 530), 'center', 'center');
    canvas.add(oImg);
});




// Instructor
var text = new fabric.Textbox(course.instructor, {
    left: 542.5,
    top: 432.5,
    width: 300,
    fontFamily: 'Tajawal',
    fontSize: 18,
    textAlign: 'center',
    fill: 'rgb(0,0,0)',
    fontWeight: '500'
});
canvas.add(text);

// Instructor Signature
fabric.Image.fromURL(course.instructorSignature, function (oImg) {
    oImg.scaleToHeight(75);
    oImg.setPositionByOrigin(new fabric.Point(695, 395), 'center', 'center');
    canvas.add(oImg);
});



// Location
var text = new fabric.Textbox(course.location, {
    left: 199,
    top: 540,
    width: 250,
    fontFamily: 'Tajawal',
    fontSize: 17,
    textAlign: 'left',
    fill: 'rgb(0,0,0)',
    fontWeight: '500'
});
canvas.add(text);


// Certificate Id
var text = new fabric.Textbox(student.value?.certificateId, {
    left: 310,
    top: 590,
    width: 250,
    fontFamily: 'Tajawal',
    fontSize: 17,
    textAlign: 'left',
    fill: 'rgb(0,0,0)',
    fontWeight: '500'
});
canvas.add(text);


onMounted(() => {
    let x = bwipjs.toCanvas('qrCode', {
        bcid: 'qrcode',       // Barcode type
        text: `https://csitelites.tech/certificate/${student.value.certificateId}`,    // Text to encode
        scale: 3,               // 3x scaling factor
        includetext: true,            // Show human-readable text
        textxalign: 'center',        // Always good to set this
    });

    fabric.Image.fromURL(qrCode.value?.toDataURL('image/png'), function (oImg) {
        oImg.scaleToHeight(100);
        oImg.setPositionByOrigin(new fabric.Point(128, 557), 'center', 'center');
        canvas.add(oImg);
    });
})


const downloadCertificate = () => {
    let link = document.createElement('a');
    link.download = `${student.value?.name}-${student.value?.certificateId}.png`;
    link.href = document.getElementById('myCanvas').toDataURL()
    link.click();
}
</script>