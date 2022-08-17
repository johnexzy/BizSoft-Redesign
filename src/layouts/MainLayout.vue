<template>
  <q-layout view="lhh lpR lFf">
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <side-bar></side-bar>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import SideBar from 'src/components/SideBar.vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  components: { SideBar },
};
</script>
