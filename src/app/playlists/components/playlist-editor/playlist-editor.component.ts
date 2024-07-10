import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PlaylistsComponent } from '../../playlists.component';
import { AppComponent } from '../../../app.component';
import { Playlist } from '../../../core/model/Playlist';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrl: './playlist-editor.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush, // d|-_-|b
})
export class PlaylistEditorComponent {
  @Input({ required: true }) playlist!: Playlist;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<Playlist>();

  draft!: Playlist;

  constructor() {
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes); // Only if new Reference! Not value!
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  submit() {
    this.cancel.emit();
  }

  clickCancel() {
    this.save.emit(this.playlist);
  }
}
