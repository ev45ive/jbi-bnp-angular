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
  inject,
} from '@angular/core';
import { PlaylistsComponent } from '../../playlists.component';
import { AppComponent } from '../../../app.component';
import { Playlist } from '../../../core/model/Playlist';
import { NgForm, NgModel } from '@angular/forms';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrl: './playlist-editor.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush, // d|-_-|b
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill',
        color: 'primary',
      } as MatFormFieldDefaultOptions,
    },
  ],
})
export class PlaylistEditorComponent {
  @Input() playlist?: Playlist = {
    id: '',
    name: '',
    public: false,
    description: '',
  };
  
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<Playlist>();

  @ViewChild('localModelRef', { read: NgModel })
  localModelRef?: NgModel;

  @ViewChild(NgForm, { read: NgForm })
  formRef?: NgForm;

  constructor(private parent:PlaylistsComponent){}

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
