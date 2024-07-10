import { Component, input } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/shared.module';
import { Album } from '../../../core/model/Album';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
})
export class AlbumCardComponent {
  album = input.required<Album>();
}