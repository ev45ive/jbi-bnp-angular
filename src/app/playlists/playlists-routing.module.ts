import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistsTracksViewComponent } from './containers/playlists-tracks-view/playlists-tracks-view.component';
import { PlaylistsViewComponent } from './containers/playlists-view/playlists-view.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

const routes: Routes = [
  {
    path: '', // /playlists/ + ''
    component: PlaylistsComponent,
   
    children:[
      {
        path:'',
        component: PlaylistsViewComponent
      }
    ]
  },
  {
    path:'tracks',
    component: PlaylistsTracksViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistsRoutingModule {}
