import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsGroupItemSpecialComponent } from './tabs-group-item-special.component';

describe('TabsGroupItemSpecialComponent', () => {
  let component: TabsGroupItemSpecialComponent;
  let fixture: ComponentFixture<TabsGroupItemSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsGroupItemSpecialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsGroupItemSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
