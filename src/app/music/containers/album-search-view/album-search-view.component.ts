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
import { SHARED_IMPORTS } from '../../../shared/shared.module';

@Component({
  selector: 'app-album-search-view',
  standalone: true,
  imports: [SHARED_IMPORTS, AlbumCardComponent, SearchFormComponent],
  templateUrl: './album-search-view.component.html',
  styleUrl: './album-search-view.component.scss',
})
export class AlbumSearchViewComponent {
  api = inject(MusicApiService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  queryChanges = this.route.queryParamMap.pipe(
    map((pm) => pm.get('q')),
    filter(Boolean),
  );

  resultsChanges = this.queryChanges.pipe(
    switchMap((q) => this.api.searchAlbums(q).pipe(catchError(() => EMPTY))),
  );

  searchAlbums(query = '') {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: query },
    });
  }
}
