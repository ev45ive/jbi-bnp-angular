<!-- https://stackblitz.com/edit/stackblitz-starters-hzhdtx -->

https://api.spotify.com/v1 -> 401 is fine!

https://stackblitz.com/github/ev45ive/jbi-bnp-angular

# Installations

node -v
v20.13.1

npm -v
10.5.2

git -v
git version 2.40.1.windows.1

code -v
Help -> About -> version
1.89.1

# Angular CLI

npm install -g @angular/cli

# Backup ZIP

https://github.com/ev45ive/jbi-bnp-angular/archive/refs/heads/master.zip

https://stackblitz.com/ -> New Angular Project

# New App

cd make/sure/where/you/want/it

ng new jbibnp --directory '.' --routing --ssr true --standalone false

npx @angular/cli new jbibnp --directory '.' --routing --ssr true --standalone false

? Which stylesheet format would you like to use? Sass (SCSS)  
 [ https://sass-lang.com/documentation/syntax#scss ]

# Angular Devtools

https://angular.dev/tools/devtools
https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh


# Angular material
ng add @angular/material

Using package manager: npm
✔ Found compatible package version: @angular/material@18.0.6.
✔ Package information loaded.

The package @angular/material@18.0.6 will be installed and executed.
Would you like to proceed? Yes
✔ Packages successfully installed.
? Choose a prebuilt theme name, or "custom" for a custom theme: Rose/Red           [Preview:       
https://material.angular.io?theme=rose-red]
? Set up global Angular Material typography styles? Yes
? Include the Angular animations module? Include and enable animations
UPDATE package.json (1330 bytes)
✔ Packages installed successfully.
UPDATE src/app/app.module.ts (586 bytes)
UPDATE angular.json (3348 bytes)
UPDATE src/index.html (648 bytes)
UPDATE src/styles.scss (182 bytes)

# Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

 "./src/**/*.{html,ts}",

 alternatively (huge size!):
  <script src="https://cdn.tailwindcss.com"></script>

 
# Playlists module 
ng g m --help

ng g m playlists -m app --route playlists --routing 

ng g c playlists/containers/playlists-view

ng g c playlists/components/playlist-list
ng g c playlists/components/playlist-details
ng g c playlists/components/playlist-editor

# SHared

ng g m shared -m playlists 
ng g d shared/directives/censor --export 


# Music search  "module" vs standalone

ng g m music -m app --route music --routing

ng g c music/containers/album-search-view
ng g c music/containers/album-details-view

ng g c music/components/search-form
ng g c music/components/results-grid
ng g c music/components/album-card 

ng g s core/services/music-api

## Navigation
ng generate @angular/material:navigation core/layouts/main-navigation

# The loop
https://www.youtube.com/watch?v=cCOL7MC4Pl0&ab_channel=JSConf


# Auth

https://developer.spotify.com/documentation/web-api/tutorials/implicit-flow

ng g s core/services/auth


# Spotify

wivoba7552@kinsef.com
placki7777

## App initializer
https://v17.angular.io/api/core/APP_INITIALIZER

## RxJS
https://gist.github.com/staltz/868e7e9bc2a7b8c1f754

https://rxmarbles.com/
http://rxmarbles.com/
https://rxviz.com/


# RxViz
```js
const { interval, from, timer } = Rx;
const { take, delay, delayWhen } = RxOperators;

interval(1000).pipe(
  take(4)
)

from([10,20,30]).pipe(
   delay(1000 )
)


from([40,10,20,30]).pipe(
   delayWhen((x) => timer(x*100) )
)
```

# Config driven forms -
https://formly.dev/docs/guide/getting-started

## Feedback form
http://www.jbinternational.co.uk/feedback/16697

 