import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlaylistsComponent } from '../../playlists.component';
import { Playlist } from '../../../core/model/Playlist';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.scss',
})
export class PlaylistListComponent {
  @Input('items') playlists: Playlist[] = [];

  // ngin
  @Output() selectedIdChange = new EventEmitter<Playlist['id']>();

  selectedId = '';

  select(id: string) {
    // this.selectedId = id;
    this.selectedIdChange.emit(id);
  }
}
