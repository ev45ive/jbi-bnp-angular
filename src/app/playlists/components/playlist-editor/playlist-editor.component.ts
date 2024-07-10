import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { PlaylistsComponent } from '../../playlists.component';
import { AppComponent } from '../../../app.component';
import { Playlist } from '../../../core/model/Playlist';
import { NgForm, NgModel } from '@angular/forms';

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

  @ViewChild('localModelRef', { read: NgModel })
  localModelRef?: NgModel;

  @ViewChild('formRef', { read: NgForm })
  formRef?: NgForm;

  ngAfterViewInit(): void {}

  submit() {
    const draft = {
      ...this.playlist,
      ...this.formRef?.value,
    };
    this.save.emit(draft);
  }

  clickCancel() {
    this.cancel.emit();
  }
}
