import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss',
  standalone: true, // 15+ -> SCAM,
  imports: [RouterOutlet],
  providers: [],
})
export class MusicComponent {}

// SCAM - Single Component Angular Module
// @NgModule({
//   declarations: [ MusicComponent ],
//   imports: [ SharedModule, RouterModule ],
//   exports: [ MusicComponent ],
// })
// export class MusicComponentModule {}
