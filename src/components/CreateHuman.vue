<template>
  <form action="" @submit.prevent="createHuman()">
    <h1>Создать {{type==='student'?'студента':'учителя'}}</h1>
    <input type="text" placeholder="Name" v-model="name">
    <input type="submit" value="Создать">
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { apiExamCreateTeacher } from '@/api/teacher/createTeacher';
import { apiExamCreateStudent } from '@/api/student/createStudent';
import {apiStudentsGetStudent} from "@/api/student/getStudents";

export interface CreateHumanProps {
  type:'student'|'teacher'
}
const props = defineProps<CreateHumanProps>();
const name = ref('');
async function createHuman() {
  if (props.type === 'teacher') {
    try {
      await apiExamCreateTeacher({ name: name.value });
      console.log(await apiStudentsGetStudent());
    } catch (e) {
      console.log(e);
    }
  }
  if (props.type === 'student') {
    try {
      await apiExamCreateStudent({ name: name.value });
      console.log(await apiStudentsGetStudent());

    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style lang="scss">

</style>
