import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
} from '@angular/core';
import { PlaylistsComponent } from '../../playlists.component';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrl: './playlist-editor.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush, // d|-_-|b
})
export class PlaylistEditorComponent {
  playlist = {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Cool playlsit',
  };
}
