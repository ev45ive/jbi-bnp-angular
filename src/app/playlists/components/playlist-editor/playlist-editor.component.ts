import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrl: './playlist-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // d|-_-|b  
})
export class PlaylistEditorComponent {
  
  playlist = {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Cool playlsit',
  };

  constructor(private cdr: ChangeDetectorRef){}

  ngDoCheck(): void {
    console.log('parent is checked!');
    this.cdr.markForCheck() // Update us with parent THIS ONE TIME!
  }

  // location = globalThis.location
}
