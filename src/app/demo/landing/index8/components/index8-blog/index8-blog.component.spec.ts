import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index8BlogComponent } from './index8-blog.component';

describe('Index8BlogComponent', () => {
  let component: Index8BlogComponent;
  let fixture: ComponentFixture<Index8BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index8BlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index8BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
