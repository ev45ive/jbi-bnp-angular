import { Component } from '@angular/core';
import { mockPlaylists } from '../core/model/mockPlaylists';

type Modes = 'details' | 'editor';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss',
})
export class PlaylistsComponent {
  
  playlists = mockPlaylists;
  selectedId = '234';
  selected = mockPlaylists[1];
  selectPlaylistById(id: string) {
    this.selected = this.playlists.find((p) => p.id == id)!;
  }

  mode: Modes = 'details';

  showDetails() {
    this.mode = 'details';
  }

  showEditor() {
    this.mode = 'editor';
  }
}
