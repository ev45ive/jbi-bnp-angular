import { Injectable } from '@angular/core';
import { mockAlbums } from '../model/mockAlbums';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root' // Singleton lazy
})
export class MusicApiService {

  // api_url = 'https://api.spotify.com/v1/search'
  api_url = environment.apiConfig.url
  
  constructor() { }

  searchAlbums(query = 'batman'){
    return mockAlbums
  }
}

// ng g s core/services/music-api