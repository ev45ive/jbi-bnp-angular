import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {

}

// SCAM - Single Component Angular Module

@NgModule({
  declarations: [ MusicComponent ],
  imports: [ SharedModule ],
  exports: [ MusicComponent ],
})
export class MusicComponentModule {}