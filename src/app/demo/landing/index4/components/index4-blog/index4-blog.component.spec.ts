import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index4BlogComponent } from './index4-blog.component';

describe('Index4BlogComponent', () => {
  let component: Index4BlogComponent;
  let fixture: ComponentFixture<Index4BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index4BlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index4BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
