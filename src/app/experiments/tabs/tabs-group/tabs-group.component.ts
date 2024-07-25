import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabsGroupItemComponent } from '../tabs-group-item/tabs-group-item.component';

@Component({
  selector: 'app-tabs-group',
  standalone: true,
  imports: [],
  templateUrl: './tabs-group.component.html',
  styleUrl: './tabs-group.component.scss',
})
export class TabsGroupComponent {
  
  toggleItem(tabItem: TabsGroupItemComponent) {
    this.children?.forEach((tab) => {
      if (tabItem !== tab) {
        tab.isOpen = false;
      }
    });
  }

  @ContentChildren(TabsGroupItemComponent)
  children?: QueryList<TabsGroupItemComponent>;

  ngAfterContentInit(): void {
    this.children;
  }
}
