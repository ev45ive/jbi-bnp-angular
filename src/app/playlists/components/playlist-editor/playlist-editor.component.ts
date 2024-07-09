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

  // constructor(private elem: ElementRef) {}

  // Injecting parents - warning: High Coupling
  constructor(private parent: PlaylistsComponent, private app: AppComponent) {
    console.log(parent, app);
    debugger;
  }

  onCancel(){
    this.parent.mode = 'details'
  }

  // constructor(private cdr: ChangeDetectorRef){}

  // ngDoCheck(): void {
  //   console.log('parent is checked!');
  //   this.cdr.markForCheck() // Update us with parent THIS ONE TIME!
  // }

  // location = globalThis.location
}
