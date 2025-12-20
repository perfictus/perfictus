import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index10BlogComponent } from './index10-blog.component';

describe('Index10BlogComponent', () => {
  let component: Index10BlogComponent;
  let fixture: ComponentFixture<Index10BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index10BlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index10BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
