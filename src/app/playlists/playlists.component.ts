import { Component } from '@angular/core';
import { mockPlaylists } from '../core/model/mockPlaylists';
import { Playlist } from '../core/model/Playlist';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';

type Modes = 'details' | 'editor';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss',
  providers:[
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        color:'accent',
        appearance:'outline'
      } satisfies MatFormFieldDefaultOptions,
    },
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
})
export class PlaylistsComponent {
  playlistsData = mockPlaylists;
  selectedId = '234';
  selected = mockPlaylists[1];
  selectPlaylistById(id: string) {
    this.selectedId = id;
    this.selected = this.playlistsData.find((p) => p.id == id)!;
  }

  mode: Modes = 'details';

  showDetails() {
    this.mode = 'details';
  }

  showEditor() {
    this.mode = 'editor';
  }

  savePlaylist(draft: Playlist) {
    console.log('Fake saving... ', draft);
  }
}
