<template>
  <div class="home">
    <CreateHuman type="student"/>
    <CreateHuman type="teacher"/>
    <form method="post" onsubmit="">
      <input type="text">
      <input type="text">
    </form>
  </div>
</template>

<script lang="ts" setup>

import { apiExamCreateExam } from '@/api/exam/createExam';
import { ref } from 'vue';
import CreateHuman from '@/components/CreateHuman.vue';

const teacher = ref(0);
const student = ref(0);
const name = ref('');
// function createExam() {
//   apiExamCreateExam({});
// }
</script>
