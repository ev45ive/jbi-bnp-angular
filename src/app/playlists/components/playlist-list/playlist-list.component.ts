import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PlaylistsComponent } from '../../playlists.component';
import { Playlist } from '../../../core/model/Playlist';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistListComponent {
  @Input('items') playlists: Playlist[] = [];

  @Output() selectedIdChange = new EventEmitter<Playlist['id']>();

  @Input() selectedId = '';

  select(id: string) {
    this.selectedIdChange.emit(id);
  }
}
