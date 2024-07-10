import { Component, Input } from '@angular/core';
import { Playlist } from '../../../core/model/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrl: './playlist-details.component.scss',
})
export class PlaylistDetailsComponent {

  // @Input('playlist') playlist: Playlist | undefined;
 
  // @Input() playlist!: Playlist ;

  @Input({ required: true }) playlist!: Playlist;
}
