<template >
  <div class="card card-compact w-1/2 h-fit aspect-video bg-white shadow-xl relative">
    <div class="card-background w-full h-full relative">
      <svg class="w-full absolute bottom-0 left-0 sclae-x-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1"
          d="M0,64L40,58.7C80,53,160,43,240,58.7C320,75,400,117,480,160C560,203,640,245,720,224C800,203,880,117,960,96C1040,75,1120,117,1200,154.7C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
        </path>
      </svg>
    </div>
    <div class="absolute top-0 left-0 px-12 py-8">
      <h1 class="text-4xl font-bold text-sky-500 leading-tight mb-2">{{ name }}</h1>
      <hr class="mb-2" />
      <p class="text-lg text-slate-400 tracking-wide mb-16">{{ role }}</p>
      <div class="flex items-center space-x-8">
        <a 
        v-for="account in socialAccounts" :key="account.provider"
        :href="`${account.link}${account.user}`" target="_blank" class="flex items-center space-x-1 text-slate-400" >
          <component :is="account.component" :size="32" />
          <span>{{ account.user }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
import IconGithub from './icons/IconGithub.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconWhatsapp from './icons/IconWhatsapp.vue';

const name = inject('name')
const role = inject('role')
const socialsLinks = inject('socials')

const accountsList = {
  github: {
    link: 'https://www.github.com/',
    component: IconGithub,
  },
  instagram: {
    link: 'https://www.instagram.com/',
    component: IconInstagram,
  },
  whatsapp: {
    link: 'https://www.whatsapp.com/',
    component: IconWhatsapp,
  }
}

const socialAccounts = computed(() =>
{
  return Object.entries(socialsLinks)
    .map(([key, value]) => ({
      provider: key,
      user: value,
      ...accountsList[key]
    })
    )
})

</script>