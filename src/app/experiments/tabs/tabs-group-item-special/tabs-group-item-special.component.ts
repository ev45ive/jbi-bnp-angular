import { Component, EventEmitter, Host, Optional } from '@angular/core';
import { TabsGroupItemComponent } from '../tabs-group-item/tabs-group-item.component';
import { ITab, TabToken, TabsGroupComponent } from '../tabs-group/tabs-group.component';

@Component({
  selector: 'app-tabs-group-item-special',
  standalone: true,
  imports: [],
  templateUrl: './tabs-group-item-special.component.html',
  styleUrl: './tabs-group-item-special.component.scss',
  providers: [
    {
      // provide: TabsGroupItemComponent,
      provide: TabToken,
      useExisting: TabsGroupItemSpecialComponent,
    },
  ],
})
// extends TabsGroupItemComponent // to get toggle()
export class TabsGroupItemSpecialComponent implements ITab {
  toggled = new EventEmitter<boolean>();
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
    this.toggled.emit(this.isOpen);
  }
  
  constructor(
    @Optional() // try to inject | null
    @Host() // Only in parent component
    protected group: TabsGroupComponent | null,
  ) {
    this.group?.registerTab(this);
  }
}
