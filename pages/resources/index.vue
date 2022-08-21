<template>
  <div flex="~ col" h="full" items="center" justify="center">
    <div h="1/12" w="full" flex="~ col gap-13px" mb="60px">
      <span text="2xl">التصنيفات</span>
      <div flex="~ gap-1rem">
        <Tag
          @click="selectCategory(selfCategory)"
          :active="selfCategory == selectedCategory"
          v-for="selfCategory in categories"
          :key="selfCategory"
          :title="selfCategory"
          type="category"
        />
      </div>
    </div>

    <div flex="~" h="11/12" w="full">
      <div
        grid="~ sm:cols-1 md:cols-2 lg:cols-2 xl:cols-2 2xl:cols-3 gap-4.375rem"
        class="auto-rows-min"
        w="full"
      >
        <div
          v-if="pending"
          h="48px"
          w="48px"
          text="light"
          class="i-line-md-loading-twotone-loop"
        ></div>
        <MiniResources
          v-else
          @category="selectCategory($event)"
          :path="resource._path"
          v-for="resource in filteredResources"
          :key="resource"
          :resource="resource"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: resources, pending } = await useAsyncData("resources", () =>
  queryContent("resources").where({ _type: "markdown" }).find()
);

const categories = ref([]);
const selectedCategory = ref(null);
const selectCategory = (category) => {
  if (selectedCategory.value == category) {
    selectedCategory.value = null;
    return;
  }
  selectedCategory.value = category;
};

resources.value.forEach((resource) =>
  resource.categories.forEach((category) => {
    let findCategory = categories.value.find(
      (_category) => _category == category
    );
    if (!findCategory) categories.value.push(category);
  })
);

const filteredResources = computed(() => {
  if (!selectedCategory.value)
    return [...resources.value].reverse().slice(0, 9);
  return resources.value.filter((resource) =>
    resource.categories.find((category) => category == selectedCategory.value)
  );
});
</script>
