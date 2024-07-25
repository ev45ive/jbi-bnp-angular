import {
  Component,
  ContentChildren,
  EventEmitter,
  InjectionToken,
  QueryList,
} from '@angular/core';
import { TabsGroupItemComponent } from '../tabs-group-item/tabs-group-item.component';
import { Subscription } from 'rxjs';

export interface ITab {
  isOpen: boolean;
  toggled: EventEmitter<boolean>;
}

export const TabToken = new InjectionToken<ITab>('ITab compatibilte compoennt');

@Component({
  selector: 'app-tabs-group',
  standalone: true,
  imports: [],
  templateUrl: './tabs-group.component.html',
  styleUrl: './tabs-group.component.scss',
})
export class TabsGroupComponent {
  toggleItem(tabItem: ITab) {
    this.children?.forEach((tab) => {
      if (tabItem === tab) return;
      tab.isOpen = false;
    });
  }

  @ContentChildren(TabToken)
  children?: QueryList<ITab>;

  // subs = new Map<ITab, Subscription>();

  registerTab(tab: ITab) {
    // this.subs.set(
    // tab,
    tab.toggled.subscribe(() => {
      this.toggleItem(tab);
    });
    // );
  }

  // unregisterTab(tab: ITab) {
  //   this.subs.get(tab)?.unsubscribe()
  // }

  ngAfterContentInit(): void {
    // this.children?.forEach((tab) => {
    //   tab.toggled.subscribe((isOpened) => {
    //     this.toggleItem(tab);
    //   });
    // });
    // this.children?.changes.subscribe(ch =>{
    //   debugger
    // })
  }
}
