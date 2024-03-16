<script setup lang="ts">
defineProps<{
  label: string
  redirect?: string
  kind: string
}>()

</script>

<template>
	<a v-if="kind === 'external'" class="rounded-lg
	font-general-medium text-center block text-sm font-medium
	 bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm 
	 px-4 py-2 mt-2 duration-500" :href="redirect">{{ label }}</a>
	<button v-else class="rounded-lg font-general-medium text-center block text-sm font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm px-4 py-2 mt-2 duration-500">{{ label }}</button>
</template>

<style lang="scss" scoped></style>
