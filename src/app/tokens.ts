import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<{
  url: string;
}>('Music API URL');
