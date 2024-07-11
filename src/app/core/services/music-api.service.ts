import { Injectable, inject } from '@angular/core';
import { mockAlbums } from '../model/mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../../tokens';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  EMPTY,
  Observable,
  Subscription,
  catchError,
  delay,
  from,
  map,
  of,
} from 'rxjs';
import { AuthService } from './auth.service';
import { AlbumResponse, AlbumSearchResponse } from '../model/Album';

@Injectable({
  providedIn: 'root', // Singleton lazy
})
export class MusicApiService {
  api_url = inject(API_URL).url;
  http = inject(HttpClient);
  auth = inject(AuthService);

  searchAlbums(query = 'batman') {
    // return of(mockAlbums)

    return this.http
      .get<AlbumSearchResponse>(this.api_url + 'search', {
        headers: {
          Authorization: `Bearer ${this.auth.token}`,
        },
        params: {
          type: 'album',
          q: query,
        },
      })
      .pipe(
        catchError((error, originalObs) => {
          if (
            error instanceof HttpErrorResponse &&
            isSpotifyErrorResponse(error.error)
          )
            throw new Error(error.error.error.message);
          throw new Error('Unknown error');
        }),
        map((res) => res.albums.items),
      );
    // ---------A----B-----C---C------>

    // next: ---O---O---O>
    // errors: ---X>
    // complete: --|>

    // ^--------R|>
    //          v - map (R -> a)
    // ^--------a|>
  }
}

interface SpotifyErrorResponse {
  error: {
    code: number;
    message: string;
  };
}

function isSpotifyErrorResponse(error: any): error is SpotifyErrorResponse {
  return (
    error &&
    'error' in error &&
    error.error &&
    'message' in error &&
    typeof error.error.message == 'string'
  );
}
