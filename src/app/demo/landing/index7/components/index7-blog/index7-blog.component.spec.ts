import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index7BlogComponent } from './index7-blog.component';

describe('Index7BlogComponent', () => {
  let component: Index7BlogComponent;
  let fixture: ComponentFixture<Index7BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index7BlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index7BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
