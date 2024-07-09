import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsTracksViewComponent } from './playlists-tracks-view.component';

describe('PlaylistsTracksViewComponent', () => {
  let component: PlaylistsTracksViewComponent;
  let fixture: ComponentFixture<PlaylistsTracksViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistsTracksViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistsTracksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
