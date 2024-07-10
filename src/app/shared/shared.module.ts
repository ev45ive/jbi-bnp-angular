import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ng g shared -m playlists 

const SHARED_IMPORTS = [
  CommonModule,
  FormsModule,
]

@NgModule({
  declarations: [],
  imports: [
    SHARED_IMPORTS, 
  ],
  exports:[
    SHARED_IMPORTS, 
  ]
})
export class SharedModule { }
