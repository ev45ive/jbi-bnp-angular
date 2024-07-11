import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/music/search',
    pathMatch: 'full',
  },
  {
    path: 'playlists',
    loadChildren: () =>
      import('./playlists/playlists.module').then((m) => m.PlaylistsModule),
  },
  {
    path: 'music',
    loadChildren: () => import('./music/music-routing.module'),
  },
  {
    path: '**',
    redirectTo: '/music/search',
    pathMatch: 'full',
    // component: PageNotFound
  },
];

export default routes