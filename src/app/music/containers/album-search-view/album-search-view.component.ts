import { Component, Inject, inject } from '@angular/core';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { MusicApiService } from '../../../core/services/music-api.service';
import { Album } from '../../../core/model/Album';

@Component({
  selector: 'app-album-search-view',
  standalone: true,
  imports: [AlbumCardComponent, SearchFormComponent],
  templateUrl: './album-search-view.component.html',
  styleUrl: './album-search-view.component.scss',
})
export class AlbumSearchViewComponent {
  api = inject(MusicApiService);

  results: Album[] = [];
  message = '';

  searchAlbums(query = '') {
    this.api.searchAlbums(query).subscribe({
      next: (albums) => (this.results = albums),
      error: (error) => (this.message = error.error.error.message),
      complete() {},
    });
  }
}
