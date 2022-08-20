<template>
  <h3 :id="id" flex="~ gap-4" mt="15" w="fit" class="group" items="center">
    <a @click="copy()" ref="el" color="#fff" decoration="none" p="y-2" border="b dark hover:mid hover:b-dashed" :href="`#${id}`">
      <slot />
    </a>
    <div text="light" class="invisible group-hover:visible i-akar-icons-link-chain"></div>
  </h3>
</template>

<script setup>
defineProps(['id'])
const el = ref(null)
const router = useRouter()

const copy = () =>{
    navigator.clipboard.writeText(`${window.location.origin + window.location.pathname + el.value.getAttribute('href')}`)
}

</script>