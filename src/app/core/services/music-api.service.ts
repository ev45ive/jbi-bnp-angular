import { Injectable, inject } from '@angular/core';
import { mockAlbums } from '../model/mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../../tokens';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root', // Singleton lazy
})
export class MusicApiService {
  api_url = inject(API_URL).url;
  http = inject(HttpClient);

  constructor() {}

  searchAlbums(query = 'batman') {
    console.log('Search', this.api_url, query);

    // Uni-Cast  Observable - aka. Recipe
    const obs: Observable<any> = this.http.get(this.api_url + 'search', {
      headers: {
        Authorization: `Bearer ilikepancakesmuch`,
      },
      params: {
        type: 'album',
        q: query,
      },
      // reportProgress: true,
    });

    // Cooking
    const subscription: Subscription = obs.subscribe(console.log);
    subscription.unsubscribe(); // Cancel requests

    // obs.subscribe() // beacon 

    const sub2 = obs.subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error.error.error.message),
      complete: () => console.log('complete'),
    });

    return mockAlbums;
  }
}

// ng g s core/services/music-api
