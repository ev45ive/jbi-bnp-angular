import { Component } from '@angular/core';
import { TabsGroupComponent } from '../tabs/tabs-group/tabs-group.component';
import { TabsGroupItemComponent } from '../tabs/tabs-group-item/tabs-group-item.component';
import { SHARED_IMPORTS } from '../../shared/shared.module';

@Component({
  selector: 'app-tabs-view',
  standalone: true,
  imports: [TabsGroupComponent, TabsGroupItemComponent, SHARED_IMPORTS],
  templateUrl: './tabs-view.component.html',
  styleUrl: './tabs-view.component.scss',
})
export class TabsViewComponent {
  dynamicTabs: number[] = [];

  addTab() {
    this.dynamicTabs[this.dynamicTabs.length ] = this.dynamicTabs.length ;
  }
}
