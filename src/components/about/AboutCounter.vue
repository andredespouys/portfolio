<script setup lang="ts">
import { defineProps } from 'vue';
import CounterBox from './CounterBox.vue';
import FlexLayout from '@/components/reusable/FlexLayout.vue';

defineProps({
  display: String,
});

const data = {
  experience: {
    title: 'Years of experience',
    target: 3,
    symbol: '+'
  },
  feedback: {
    title: 'Committed to the industry',
    target: 100,
    symbol: '%'
  },
  projects: {
    title: 'Github conflicts generated this year. And counting...',
    target: 77,
    symbol: '+'
  }
};

console.log(data['experience']);
</script>

<template>
  <FlexLayout :display="display">
    <CounterBox :title="data.experience.title" :target="data.experience.target" :symbol="data.experience.symbol" />
    <CounterBox :title="data.feedback.title" :target="data.feedback.target" :symbol="data.feedback.symbol"/>
    <CounterBox :title="data.projects.title" :target="data.projects.target" :symbol="data.projects.symbol"/>
  </FlexLayout>
</template>
