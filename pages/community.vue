<template>
    <div>
        <div flex="~ gap-4" justify="center">
            <div v-for="unit in data.units" :key="unit.id">
                <Unit @select="selectedUnit = $event" :selected="selectedUnit.id == unit.id" :unit="unit" />
            </div>
        </div>
        <div flex="~ col" capitalize="~">
            <span>{{ unitLeader?.nick ? unitLeader.nick : unitLeader.user.username }}</span>
            <span :class="[
                member.title == 'Leader' ? getUnitColor(selectedUnit.name) : '' 
            ]" v-for="member in unitMembers" :key="member.id">
                {{ member.title }} - {{ member.nick ? member.nick : member.user.username }}
            </span>
        </div>
    </div>
</template>

<script setup>
const { data, pending, error, refresh } = await useAsyncData(
  'units',
  () => $fetch('/api/units')
)

const selectedUnit = ref(data.value.units[0])

const unitLeader = computed(() => {
  return selectedUnit.value.members.find(member => member.title == 'Leader')
})
const unitMembers = computed(() => {
  return selectedUnit.value.members.filter(member => member.title != 'Leader')
})

const { getUnitColor } = useUnitColor()

</script>