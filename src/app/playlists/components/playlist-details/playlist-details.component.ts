import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Playlist } from '../../../core/model/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrl: './playlist-details.component.scss',
})
export class PlaylistDetailsComponent {
  // @Input({ required: true }) playlist!: Playlist;
  @Input() playlist?: Playlist;

  @Output() edit = new EventEmitter<Playlist['id']>();

  editClick() {
    if (this.playlist) this.edit.emit(this.playlist.id);
  }
}
