---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/vincentchoqueuse.png',
    name: 'Vincent Choqueuse',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/vincentchoqueuse' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/vincent-choqueuse-388a5720/' }
    ]
  },
    {
    avatar: 'https://www.github.com/Polo-Wolo.png',
    name: 'Paul Walczak',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/Polo-Wolo' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/paul-walczak-639106194/' }
    ]
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      This cheatsheet has been created and is maintained by a group of <a href="https://www.enib.fr/fr/">ENIB</a> professors and students.  
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>