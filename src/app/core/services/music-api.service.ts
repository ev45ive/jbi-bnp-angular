import { Injectable, inject } from '@angular/core';
import { mockAlbums } from '../model/mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../../tokens';

@Injectable({
  providedIn: 'root', // Singleton lazy
})
export class MusicApiService {
  // api_url = 'https://api.spotify.com/v1/search'
  // api_url = environment.apiConfig.url

  api_url = inject(API_URL).url;

  constructor() {}

  searchAlbums(query = 'batman') {
    console.log('Search',this.api_url,query);
    
    return mockAlbums;
  }
}

// ng g s core/services/music-api
