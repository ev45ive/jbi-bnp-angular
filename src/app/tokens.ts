import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<{
  url: string;
}>('Music API URL');


type BananaCONFIG = {
  bananaType: string;
};

export const MyBananaConfig = new InjectionToken<BananaCONFIG>('Banan config')

// inject(MyBananaConfig)

// provide: MyBananaConfig, useValue/Class/Factyurt/useExising