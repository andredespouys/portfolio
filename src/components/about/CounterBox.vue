<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';


const props = defineProps<{
  title: String,
  target: number,
  symbol? : String
}>()
const counter = ref<number>(0);

const duration = 1000; // Duration in milliseconds

onMounted(() => {
  countTo(props.target);
});

function countTo(target: number) {
  const increment = target / (duration / 100);
  const interval = setInterval(() => {
    if (counter.value < target) {
      counter.value += increment;
    } else {
      counter.value = target;
      clearInterval(interval);
    }
  }, 100);
}
</script>

<template>
    <div class="CounterBox w-full">
        <div class="counter flex flex-col text-center items-center w-full justify-around">
			<div class="basis-1/4 font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2">
			{{ Math.floor(counter) }}{{ symbol }}
			</div>
			<span class="basis-1/2 block text-md text-ternary-dark dark:text-ternary-light">{{ title }}</span>
		</div>
    </div>
</template>

<style lang="scss" scoped></style>