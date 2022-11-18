<template>
  <div class="fixed bottom-0 left-0 w-full h-1/3 bg-slate-700">
    <div class="py-8 h-full overflow-auto flex flex-col items-center">
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">What is your name?</span>
        </label>
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" v-model="name" maxlength="27" />
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Your role</span>
        </label>
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" v-model="role" maxlength="56" />
      </div>
      <div class="form-control w-full max-w-xs">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Your socials</span>
          </label>
          <div class="flex flex-col space-y-4 w-full">
            <label class="input-group">
              <span>
                <IconWhatsapp />
              </span>
              <input type="text" placeholder="08123456780" class="input w-full input-bordered" v-model="socials.whatsapp" />
            </label>
            <label class="input-group">
              <span>
                <IconInstagram />
              </span>
              <input type="text" placeholder="johnDoe69" class="input w-full input-bordered" v-model="socials.instagram" />
            </label>
            <label class="input-group">
              <span>
                <IconGithub />
              </span>
              <input type="text" placeholder="johnDoe679" class="input w-full input-bordered" v-model="socials.github" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconGithub from './icons/IconGithub.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconWhatsapp from './icons/IconWhatsapp.vue';

import { computed } from 'vue'
const props = defineProps({
  name: String,
  role: String,
  socials: Object
})

const emit = defineEmits(['update:name', 'update:role', 'update:socials'])

const name = computed({
  get ()
  {
    return props.name
  },
  set (newValue)
  {
    emit('update:name', newValue)
  }
})

const role = computed({
  get ()
  {
    return props.role
  },
  set (newValue)
  {
    emit('update:role', newValue)
  }
})

const socials = computed({
  get ()
  {
    return props.socials
  },
  set (newValue)
  {
    emit('update:socials', newValue)
  }
})
</script>