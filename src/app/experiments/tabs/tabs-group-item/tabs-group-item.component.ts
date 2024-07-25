import { Component, EventEmitter, Host, Input, Optional } from '@angular/core';
import {
  ITab,
  TabToken,
  TabsGroupComponent,
} from '../tabs-group/tabs-group.component';
import { TabsGroupItemSpecialComponent } from '../tabs-group-item-special/tabs-group-item-special.component';

@Component({
  selector: 'app-tabs-group-item',
  standalone: true,
  imports: [],
  templateUrl: './tabs-group-item.component.html',
  styleUrl: './tabs-group-item.component.scss',
  providers: [
    {
      provide: TabToken,
      useExisting: TabsGroupItemComponent,
    },
  ],
})
export class TabsGroupItemComponent {
  @Input() title = '';
  @Input() isOpen = false;

  toggled = new EventEmitter<boolean>();

  toggle() {
    this.isOpen = !this.isOpen;
    this.toggled.emit(this.isOpen);
    // this.group?.toggleItem(this); //Not my REsponsibiiltiy!
  }

  constructor(
    @Optional() // try to inject | null
    @Host() // Only in parent component
    protected group: TabsGroupComponent | null,
  ) {
    this.group?.registerTab(this);
  }

  // ngOnDestroy(): void {
  //   this.group?.unregisterTab(this);
  // }
}
