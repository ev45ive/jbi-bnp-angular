import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-group-item',
  standalone: true,
  imports: [],
  templateUrl: './tabs-group-item.component.html',
  styleUrl: './tabs-group-item.component.scss',
})
export class TabsGroupItemComponent {
  @Input() title = '';
  @Input() isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
