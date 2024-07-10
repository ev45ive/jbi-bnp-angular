import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PlaylistsComponent } from '../../playlists.component';

NgFor;
@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.scss',
})
export class PlaylistListComponent {
  playlists = [];
  selectedId = '';

  select(id: string) {
    this.selectedId = id;
  }

  // constructor(parent: PlaylistsComponent) {
  //   parent.selectPlaylistById(this.selectedId);
  // }
}
