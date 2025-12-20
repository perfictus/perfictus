import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index6BlogComponent } from './index6-blog.component';

describe('Index6BlogComponent', () => {
  let component: Index6BlogComponent;
  let fixture: ComponentFixture<Index6BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index6BlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index6BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
