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
      { icon: 'linkedin', link: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiC66rojIv8AhVuQaQEHasxDx8QFnoECBAQAQ&url=https%3A%2F%2Ffr.linkedin.com%2Fin%2Fvincent-choqueuse-388a5720&usg=AOvVaw0Wg8hbubGJ3yTOQWkxCtzr' }
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
  {
    avatar: 'https://github.com/nils-van-zuijlen.png',
    name: 'Nils Van Zuijlen',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/nils-van-zuijlen/' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitLab</title><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>',
        }, // gitlab
        link: 'https://gitlab.com/nils-van-zuijlen/'
      },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nils-van-zuijlen/' },
      { icon: 'mastodon', link: 'https://social.linux.pizza/@amael' }
    ]
  },
  {
    avatar: 'https://git.enib.fr/uploads/-/system/user/avatar/527/avatar.png?width=96',
    name: 'Ulysse Moreau',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/Vyjill/' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitLab</title><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>',
        }, // gitlab
        link: 'https://gitlab.com/umoreau/'
      },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/ulysse-moreau/' },
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
