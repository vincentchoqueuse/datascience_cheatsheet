# Vue 

Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.

* [Documentation](https://vuejs.org/guide/introduction.html)

## Vue website using Vite

[Vite](https://vitejs.dev) is a build tool that aims to provide a faster and leaner development experience for modern web projects. It is composed of:

* A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement.

* A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

### Create your Vue Project

```
$ yarn create vite my-vue-app --template vue
```

### Run your Project

```
$ cd my-vue-app
$ yarn
$ yarn dev
```

## Projects with Vue Router and Pinia 

### Install libraries

* [Vue Router](https://router.vuejs.org): Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze
* [Pinia](https://pinia.vuejs.org): Pinia is a store library for Vue, it allows you to share a state across components/pages. 

```
$ yarn add vue-router@4
$ yarn add pinia
```

## Project structure

```
.
├── App.vue
├── assets
│   └── vue.svg
├── components
│   ├── VContent.vue
│   ├── ...
│   └── VSidebar.vue
├── main.js
├── router
│   └── index.js   // managed by vue router
├── store
│   └── useCounter.js   // managed by pinia
├── style.css
└── views          // your views
    ├── HomeView.vue
    ├── ...
    └── AboutView.vue
```


In your project create the file `index.js` in the router folder

::: code-group
```js [main.js]
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import './style.css'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount("#app");
```

```js [router/index.js]
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
```

```js [store/useCounter.js]
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

:::