import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsGroupItemComponent } from './tabs-group-item.component';

describe('TabsGroupItemComponent', () => {
  let component: TabsGroupItemComponent;
  let fixture: ComponentFixture<TabsGroupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsGroupItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
