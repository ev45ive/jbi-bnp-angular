import { Component } from '@angular/core';
import { TabsGroupComponent } from "../tabs/tabs-group/tabs-group.component";
import { TabsGroupItemComponent } from "../tabs/tabs-group-item/tabs-group-item.component";

@Component({
  selector: 'app-tabs-view',
  standalone: true,
  imports: [TabsGroupComponent, TabsGroupItemComponent],
  templateUrl: './tabs-view.component.html',
  styleUrl: './tabs-view.component.scss'
})
export class TabsViewComponent {

}
