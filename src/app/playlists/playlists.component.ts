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

type DisplayModes = 'details' | 'editor' | 'creator'  
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
  selectedId = '';
  // selectedId: string = '';
  // selectedId?: string; // string | undefined
  // selectedId? = '';

  // readonly SOME_CONSTANT = 'BANANA'; // "BANANA" literal type
  // if(this.SOME_CONSTANT == 'APPLE'){}

  // mode: string = 'details';
  // mode: 'details' = 'details';
  // mode = 'details' as const;
  // mode: 'details' | 'editor' | 'creator' = 'creator';

  mode: DisplayModes = 'creator';

  playlistsData = mockPlaylists;
  selected = mockPlaylists[1];

  selectPlaylistById(id: string) {
    const fromServer = 'de' + 'tails';
    // if(this.mode === 'details') return

    // if (fromServer == 'details' || fromServer === 'editor')
    //   this.mode = fromServer;

    this.selectedId = id;
    this.selected = this.playlistsData.find((p) => p.id == id)!;
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
