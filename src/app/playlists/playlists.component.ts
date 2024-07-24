import { Component } from '@angular/core';
import { mockPlaylists } from '../core/model/mockPlaylists';
import { Playlist } from '../core/model/Playlist';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import { Track } from '../core/model/Album';

type DisplayModes = 'details' | 'editor' | 'creator';
// type DisplayModes = 'details' | 'editor' | 'creator' | string
// type DisplayModes = 'details' | 'editor' | 'creator' | (string & {})

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss',
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        color: 'accent',
        appearance: 'outline',
      } satisfies MatFormFieldDefaultOptions,
    },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
})
export class PlaylistsComponent {
  mode: DisplayModes = 'creator';

  selectedId = '';
  playlistsData = mockPlaylists;
  selected = mockPlaylists[1];

  selectPlaylistById(id: string) {
    this.selectedId = id;

    // this.selected = this.playlistsData.find((p) => p.id == id) as any;
    // this.selected = this.playlistsData.find((p) => p.id == id)!;
    // this.selected = this.playlistsData.find((p) => p.id == id) as Playlist; // | undefined
    // this.selected = {} as Playlist;

    let found = this.playlistsData.find((p) => p.id == id) as
      | Playlist
      // | string // Extra Type
      | undefined;

    // found = 'spice latee!';

    if (found && typeof found !== 'string')
      this.selected = found; // Playlist
    else if (found == undefined)
      found; // undefined
    
    // Extra case
    // else if(typeof found == 'string'){
    //   found.toUpperCase() // Error
    // }

    else {
      // const _never: never = found;
      // found as never;      // Casting
      
      // Exhaustivness Check
      found satisfies never;  // Checking!!! // Compile TS
      throw new Error('Unexpected item found!'); // JS Runtime
    }

    return true;
    const x = 'pancakes'; // Unreachable code detected.
  }

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
