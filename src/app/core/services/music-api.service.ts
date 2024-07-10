import { Injectable } from '@angular/core';
import { mockAlbums } from '../model/mockAlbums';

@Injectable({
  providedIn: 'root' // Singleton lazy
})
export class MusicApiService {
  
  constructor() { }

  searchAlbums(query = 'batman'){
    return mockAlbums
  }
}

// ng g s core/services/music-api