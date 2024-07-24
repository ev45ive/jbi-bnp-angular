import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CensorDirective } from './directives/censor.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContenteditableDirective } from './directives/contenteditable.directive';

// ng g shared -m playlists

export const SHARED_IMPORTS = [
  AsyncPipe,
  RouterLink,
  RouterLinkActive,
  CommonModule,
  FormsModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [CensorDirective, ContenteditableDirective],
  imports: [SHARED_IMPORTS],
  exports: [SHARED_IMPORTS, CensorDirective, ContenteditableDirective],
})
export class SharedModule {}
