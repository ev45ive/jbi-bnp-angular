import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Playlist } from '../../../core/model/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrl: './playlist-details.component.scss',
})
export class PlaylistDetailsComponent {

  @Input({ required: true }) playlist!: Playlist;

  @Output() edit = new EventEmitter<Playlist['id']>();

  editClick(){
    this.edit.emit(this.playlist.id)
  }
}
