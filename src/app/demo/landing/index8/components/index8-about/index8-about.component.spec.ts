import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index8AboutComponent } from './index8-about.component';

describe('Index8AboutComponent', () => {
  let component: Index8AboutComponent;
  let fixture: ComponentFixture<Index8AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index8AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index8AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
