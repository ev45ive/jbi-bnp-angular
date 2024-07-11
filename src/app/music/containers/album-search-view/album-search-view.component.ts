import { Component, Inject, inject } from '@angular/core';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { MusicApiService } from '../../../core/services/music-api.service';
import { Album } from '../../../core/model/Album';
import { ActivatedRoute, Router } from '@angular/router';
import {
  EMPTY,
  catchError,
  concatMap,
  exhaustAll,
  exhaustMap,
  filter,
  map,
  mergeMap,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-album-search-view',
  standalone: true,
  imports: [AlbumCardComponent, SearchFormComponent],
  templateUrl: './album-search-view.component.html',
  styleUrl: './album-search-view.component.scss',
})
export class AlbumSearchViewComponent {
  api = inject(MusicApiService);
  router = inject(Router);
  route = inject(ActivatedRoute); // current route in router-outlet

  query = '';
  results: Album[] = [];
  message = '';

  queryChanges = this.route.queryParamMap.pipe(
    map((pm) => pm.get('q')),
    filter(Boolean),
  );

  resultsChanges = this.queryChanges.pipe(
    switchMap((q) => this.api.searchAlbums(q)
      .pipe(catchError(() => EMPTY))), // protect outer pipe from error
  );

  ngOnInit(): void {
    this.queryChanges.subscribe((q) => (this.query = q));
    this.resultsChanges.subscribe((res) => (this.results = res));

    // this.resultsChanges.subscribe( obs => obs.subscribe( res => {} ))

    // this.queryChanges.subscribe((q) => {
    //   this.api.searchAlbums(q).subscribe({
    //     next: (albums) => (this.results = albums),
    //     error: (error) => (this.message = error.message),
    //   });
    // });
  }

  searchAlbums(query = '') {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: query },
    });
  }
}
