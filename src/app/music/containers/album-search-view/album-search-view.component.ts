import { Component, DestroyRef, Inject, inject } from '@angular/core';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { MusicApiService } from '../../../core/services/music-api.service';
import { Album } from '../../../core/model/Album';
import { ActivatedRoute, Router } from '@angular/router';
import {
  EMPTY,
  Subject,
  Subscription,
  catchError,
  concatMap,
  exhaustAll,
  exhaustMap,
  filter,
  map,
  mergeMap,
  switchMap,
  takeUntil,
} from 'rxjs';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
// function takeUntilDestroyed<T>() {
//   const sub = new Subject();
//   inject(DestroyRef).onDestroy(() => sub.next(null));
//   return takeUntil<T>(sub);
// }

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
  message = '';
  results: Album[] = [];

  queryChanges = this.route.queryParamMap.pipe(
    map((pm) => pm.get('q')),
    filter(Boolean),
    takeUntilDestroyed(),
  );

  resultsChanges = this.queryChanges.pipe(
    switchMap((q) => this.api.searchAlbums(q).pipe(catchError(() => EMPTY))),
    takeUntilDestroyed(),
  );

  ngOnInit(): void {
    this.queryChanges.subscribe((q) => (this.query = q));
    this.resultsChanges.subscribe((res) => (this.results = res));
  }

  searchAlbums(query = '') {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: query },
    });
  }
}
