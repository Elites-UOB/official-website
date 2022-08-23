<template>
    <div>
        <div v-if="pending" text="center">
            loading
        </div>
        <div v-else >
            <div flex="~"  sm="w-20 gap-2  m-0" md="m-9"   >
                <div  v-for="unit in data.units" :key="unit.id" :style="{background: selectedUnit.id == unit.id ? getUnitColor(selectedUnit.name) : ''}">
                    <Unit @select="selectedUnit = $event" :selected="selectedUnit.id == unit.id" :unit="unit" />
                </div>
            </div>
            <div flex="~ col" capitalize="~" align="center" mt="4" >
                <span text="lg" :style="{color: getUnitColor(selectedUnit.name)}">{{ unitLeader.title }} - {{ unitLeader?.nick ? unitLeader.nick : unitLeader.user.username }}</span>
                <div grid="~" grid-cols="3">
                    <span v-for="member in unitMembers" :key="member.id">
                        {{ member.nick ? member.nick : member.user.username }}
                    </span>
                </div>
            </div>
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