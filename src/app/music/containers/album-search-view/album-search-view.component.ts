import { Component } from '@angular/core';
import { AlbumCardComponent } from "../../components/album-card/album-card.component";
import { SearchFormComponent } from "../../components/search-form/search-form.component";

@Component({
  selector: 'app-album-search-view',
  standalone: true,
  imports: [AlbumCardComponent, SearchFormComponent],
  templateUrl: './album-search-view.component.html',
  styleUrl: './album-search-view.component.scss'
})
export class AlbumSearchViewComponent {

}
