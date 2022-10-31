import stringHash from '@sindresorhus/string-hash';



export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
      if (file._dir === '_courses' && file._extension === 'yml'){
        file.students.forEach((student) => {
            student.certificateId = `${stringHash(file.title + student.email)}`
        })
    }
  })
})

