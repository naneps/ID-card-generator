<template >
  <div class="container mx-auto">
    <!-- <div class="h-screen"> -->
      <OutputView />
    <!-- </div> --> 
    <FormControl :name="name" :role="role" :socials="socials" @update:name="(e) => name = e" @update:role="(e) => role = e" @update:socials="(e) => socials = e" />
  </div>
</template>
<script setup>
import OutputView from './pages/OutputView.vue';
import FormControl from './components/FormControl.vue';
import { ref, reactive, provide } from 'vue'

const name = ref('John Doe')
const role = ref('Front End Engineer')
const socials = reactive({
  whatsapp: '08123456789',
  instagram: 'johnDoe727',
  github: 'johnDoe69'
})

provide('name', name)
provide('role', role)
provide('socials', socials)
</script>
<style >
</style>