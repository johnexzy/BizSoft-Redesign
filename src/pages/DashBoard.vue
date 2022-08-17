<template>
  <q-page class="dashboard">
    <NavBar title-text="Dashboard" />
    <div class="dashboard-sub-nav">
      <div>
        <span>Dashboard</span> <q-icon name="chevron_right" />
        <span class="dashboard-sub-nav-active">Clocked-in Employees</span>
      </div>
      <div>
        <q-btn
          color="secondary"
          text-color="text-black-2"
          unelevated
          no-caps
          label="Export"
        />
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Microsoft Excel (.xlsx)</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Acrobat Reader (.pdf)</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>
    </div>
    <div class="container q-mt-lg q-pt-sm">
      <TableList
        :rows="rows"
        :columns="columns"
        :getSelectedString="getSelectedString"
        :list-title="'Clocked-in Employees'"
      ></TableList>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

const columns = [
  {
    name: 'desc',
    required: true,
    label: 'Pay Cirlce',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'location',
    align: 'center',
    label: 'Location',
    field: 'location',
    sortable: true,
  },
  {
    name: 'approval',
    label: 'Approval Status',
    align: 'center',
    field: 'approval',
    sortable: true,
  },
  {
    name: 'current_approval',
    label: 'Current Approval',
    field: 'current_approval',
    align: 'left',
  },
  { name: 'action', label: 'Action', field: 'action', align: 'left' },
];

const rows = [
  {
    name: 'Frozen Yogurt',
    location: 'Chicago Office',
    approval: 'Pending-Level 1',
    current_approval: 'Olabode Azeez',
    action: 'Jun 20, 2020',
    sodium: 87,
  },
  {
    name: 'Ice cream sandwich',
    location: 'Chicago Office',
    approval: 'Pending-Level 1',
    current_approval: 'Olabode Azeez',
    action: 'Jun 20, 2020',
    sodium: 129,
  },
  {
    name: 'Eclair',
    location: 'Chicago Office',
    approval: 'Pending-Level 1',
    current_approval: 'Olabode Azeez',
    action: 'Jun 20, 2020',
    sodium: 337,
  },
  {
    name: 'Cupcake',
    location: 'Chicago Office',
    approval: 'Pending-Level 1',
    current_approval: 'Olabode Azeez',
    action: 'Jun 20, 2020',
    sodium: 413,
  },
  {
    name: 'Gingerbread',
    location: 'Chicago Office',
    approval: 'Pending-Level 1',
    current_approval: 'Olabode Azeez',
    action: 'Jun 20, 2020',
    sodium: 327,
  },
  {
    name: 'Jelly bean',
    location: 'Chicago Office',
    approval: 'Pending-Level 1',
    current_approval: 'Olabode Azeez',
    action: 'Jun 20, 2020',
    sodium: 50,
  },
  {
    name: 'Lollipop',
    location: 'Chicago Office',
    approval: 'Pending-Level 1',
    current_approval: 'Olabode Azeez',
    action: 'Jun 20, 2020',
    sodium: 38,
  },
  {
    name: 'Honeycomb',
    location: 'Chicago Office',
    approval: 'Pending-Level 1',
    current_approval: 'Olabode Azeez',
    action: 'Jun 20, 2020',
    sodium: 562,
  },
  {
    name: 'Donut',
    location: 'Chicago Office',
    approval: 'Pending-Level 1',
    current_approval: 'Olabode Azeez',
    action: 'Jun 20, 2020',
    sodium: 326,
  },
  {
    name: 'KitKat',
    location: 'Chicago Office',
    approval: 'Pending-Level 1',
    current_approval: 'Olabode Azeez',
    action: 'Jun 20, 2020',
    sodium: 54,
  },
];

export default {
  setup() {
    const selected = ref([]);

    return {
      selected,
      columns,
      rows,

      getSelectedString() {
        return selected.value.length === 0
          ? ''
          : `${selected.value.length} record${
              selected.value.length > 1 ? 's' : ''
            } selected of ${rows.length}`;
      },
    };
  },
};
</script>
