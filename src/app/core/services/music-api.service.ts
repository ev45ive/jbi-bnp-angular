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
import {
  AlbumResponse,
  AlbumSearchResponse,
  PagingObject,
} from '../model/Album';
import { Playlist } from '../model/Playlist';

@Injectable({
  providedIn: 'root', // Singleton lazy
})
export class MusicApiService {
  http = inject(HttpClient);
  auth = inject(AuthService);

  searchAlbums(query = 'batman') {
    return this.http
      .get<AlbumSearchResponse>('search', {
        params: {
          type: 'album',
          q: query,
        },
      })
      .pipe(map((res) => res.albums.items));
  }

  getAlbumById(id = '') {
    return this.http.get<AlbumResponse>(`albums/${id}`);
  }

  getPlaylistById(id = '') {
    return this.http.get<Playlist>(`playlists/${id}`);
  }

  getMyPlaylists() {
    return this.http
      .get<PagingObject<Playlist>>(`me/playlists`)
      .pipe(map((res) => res.items));
  }
}
