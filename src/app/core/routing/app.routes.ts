import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'participants',
    loadChildren: () =>
      import('../../features/participants/participants.route')
        .then(m => m.PARTICIPANTS_ROUTES)
  },
  {
    path: 'checkin',
    loadChildren: () =>
      import('../../features/checkin/checkin.routes')
        .then(m => m.CHECKIN_ROUTES)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../features/dashboard/dashboard.routes')
        .then(m => m.DASHBOARD_ROUTES)
  }
];
