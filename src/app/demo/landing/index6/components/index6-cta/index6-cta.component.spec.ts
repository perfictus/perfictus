import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index6CtaComponent } from './index6-cta.component';

describe('Index6CtaComponent', () => {
  let component: Index6CtaComponent;
  let fixture: ComponentFixture<Index6CtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index6CtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index6CtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
