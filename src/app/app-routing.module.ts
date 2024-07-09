import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/playlists',
    pathMatch: 'full',
  },
  {
    path: 'playlists',
    loadChildren: () =>
      import('./playlists/playlists.module')
    .then((m) => m.PlaylistsModule),
  },
  {
    path: '**',
    redirectTo: '/playlists',
    pathMatch: 'full',
    // component: PageNotFound
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
