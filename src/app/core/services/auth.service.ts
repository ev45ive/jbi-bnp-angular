import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token = '';

  storage: Storage = globalThis.sessionStorage;
  // storage: Storage = globalThis.localStorage;

  constructor() {}

  url = 'https://accounts.spotify.com/authorize';

  params = {
    redirect_uri: 'http://localhost:4200/callback',
    response_type: 'token',
    client_id: '348275ad55044c3b8d42e987d97995a0',
    scope: 'user-read-private user-read-email',
    state: '',
    show_dialog: 'true',
  };

  // Redirect to SSO Login
  // TODO: Move it into Popup with window.open('popup.html')
  initLogin() {
    window.location.href = this.url + '?' + new URLSearchParams(this.params);
  }

  checkLogin() {
    let access_token;

    if (globalThis.location?.hash) {
      const params = new URLSearchParams(globalThis.location?.hash.slice(1));
      access_token = params.get('access_token');
    }

    if (access_token) {
      globalThis.location.hash = ''
      this.storage.setItem('token', access_token);
    }
    this.token = access_token || this.storage?.getItem('token') || '';
  }
}
