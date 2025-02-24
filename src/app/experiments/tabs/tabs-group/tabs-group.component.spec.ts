import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsGroupComponent } from './tabs-group.component';

describe('TabsGroupComponent', () => {
  let component: TabsGroupComponent;
  let fixture: ComponentFixture<TabsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
