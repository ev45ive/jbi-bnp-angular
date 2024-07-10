import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PlaylistsComponent } from '../../playlists.component';
import { Playlist } from '../../../core/model/Playlist';

NgFor;
@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.scss',
})
export class PlaylistListComponent {
  playlists: Playlist[] = [];
  selectedId = '';

  select(id: string) {
    this.selectedId = id;
  } 
}
