import { Injectable, inject } from '@angular/core';
import { mockAlbums } from '../model/mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../../tokens';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // Singleton lazy
})
export class MusicApiService {
  api_url = inject(API_URL).url;
  http = inject(HttpClient);

  constructor() {}

  searchAlbums(query = 'batman') {
    console.log('Search', this.api_url, query);

    this.http.get(this.api_url + 'search', {
      headers: {
        Authorization: `Bearer ilikepancakesmuch`,
      },
      params: {
        type: 'album',
        q: query,
      },
    });

    return mockAlbums;
  }
}

// ng g s core/services/music-api
