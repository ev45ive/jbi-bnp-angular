import { Injectable, inject } from '@angular/core';
import { mockAlbums } from '../model/mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../../tokens';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, of } from 'rxjs';
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
      .pipe
      // step 2,
      // step 3
      // step 4
      ();
    // ---------A----B-----C---C------>

    // next: ---O---O---O>
    // errors: ---X>
    // complete: --|>

    // ^--------R|>
    //          v
    // ^--------a|>
  }
}
