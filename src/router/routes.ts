import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Dashboard/DashBoard.vue'),
      },
      {
        path: '/head-count',
        component: () => import('pages/Dashboard/HeadCount.vue'),
      },
      {
        path: '/unconfirmed-employees',
        component: () => import('pages/Dashboard/UnconfirmedEmployee.vue'),
      },
      {
        path: '/punctuality-report',
        component: () => import('pages/Dashboard/PunctualityReport.vue'),
      },
      {
        path: '/attendance-report',
        component: () => import('pages/Dashboard/AttendanceReport.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
