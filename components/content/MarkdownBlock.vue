<!-- This component is used to show Markdown code block examples -->
<template>
  <pre><ContentSlot :use="$slots.default" unwrap="p" /></pre>
</template>

<style scoped>
  pre {
    direction: ltr;
  }
</style>