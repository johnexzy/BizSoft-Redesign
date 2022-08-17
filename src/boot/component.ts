import { boot } from 'quasar/wrappers';
import SideBar from 'src/components/SideBar.vue';
import NavBar from 'src/components/NavBar.vue';
import TableList from 'src/components/TableList.vue';
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.component('SideBar', SideBar);
  app.component('NavBar', NavBar);
  app.component('TableList', TableList);
});
