<template>
  <div class="table-list">
    <div class="row justify-between q-py-lg q-px-md">
      <div class="table-list-title">{{ listTitle }}</div>
      <q-pagination
        v-model="initialPagination.page"
        color="grey-8"
        :max="pagesNumber"
        boundary-numbers
        :max-pages="6"
        boundary-links
        size="sm"
      />
    </div>

    <q-table
      flat
      :rows="rows"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :pagination="initialPagination"
      v-model:selected="selected"
      hide-pagination
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      selected: [],
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        // rowsNumber: xx if getting data from a server
      },
    };
  },
  computed: {
    pagesNumber() {
      return Math.ceil(this.rows.length / this.initialPagination.rowsPerPage);
    },
  },
  props: ['rows', 'columns', 'getSelectedString', 'listTitle'],
});
</script>
