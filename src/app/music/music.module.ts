import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    MusicRoutingModule
  ],
})
export class MusicModule {}
