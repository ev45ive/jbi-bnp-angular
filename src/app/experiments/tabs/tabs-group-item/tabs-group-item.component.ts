import { Component, Input } from '@angular/core';
import { TabsGroupComponent } from '../tabs-group/tabs-group.component';

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
    this.group.toggleItem(this)
  }

  constructor(protected group: TabsGroupComponent) {
  }
}
