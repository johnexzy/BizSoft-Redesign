<template>
  <q-page class="dashboard">
    <NavBar title-text="Dashboard" />
    <div class="dashboard-sub-nav">
      <div>
        <span>Dashboard</span> <q-icon name="chevron_right" />
        <span class="dashboard-sub-nav-active">Unconfirmed Employees</span>
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
    <div class="container q-mt-md">
      <div class="row justify-between q-py-lg q-px-md">
        <div class="table-list-title">Employees</div>
        <div class="row q-gutter-lg">
          <q-pagination
            v-model="initialPagination.page"
            color="grey-8"
            :max="pagesNumber"
            boundary-numbers
            :max-pages="4"
            outline
            boundary-links
            size="md"
          />
          <div>
            <q-btn
              color="secondary"
              text-color="text-black-2"
              unelevated
              icon="filter_alt"
              no-caps
              label="Search & Filter"
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
      </div>

      <TableList
        :rows="rows"
        :columns="columns"
        :getSelectedString="getSelectedString"
        list-title="Clocked-in Employees"
        :pagination="initialPagination"
      ></TableList>
    </div>
  </q-page>
</template>
<script>
import { ref, computed } from 'vue';

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

export default {
  setup() {
    const selected = ref([]);
    const initialPagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 10,
      // rowsNumber: xx if getting data from a server
    });
    const rows = ref([]);
    function populateRow() {
      for (let index = 1; index <= 100; index++) {
        rows.value.push({
          name: 'Pay Circle ' + index,
          location: 'Chicago Office',
          approval: 'Pending-Level 1',
          current_approval: 'Olabode Azeez',
          action: 'Jun 20, 2020',
          sodium: 87,
        });
      }
    }
    populateRow();
    return {
      selected,
      columns,
      rows,
      initialPagination,
      pagesNumber: computed(() =>
        Math.ceil(rows.value.length / initialPagination.value.rowsPerPage)
      ),
      getSelectedString() {
        return selected.value.length === 0
          ? ''
          : `${selected.value.length} record${
              selected.value.length > 1 ? 's' : ''
            } selected of ${rows.value.length}`;
      },
    };
  },
};
</script>
